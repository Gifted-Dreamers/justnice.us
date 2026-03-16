#!/usr/bin/env node
// build.js — Build script for justNICE.us
// Injects shared nav/footer/scripts partials into HTML pages at deploy time.
// Strips external CDN references (Tailwind, Google Fonts) for visitor privacy.

const fs = require('fs');
const path = require('path');

const SRC = __dirname;
const DIST = path.join(SRC, 'dist');
const PARTIALS_DIR = path.join(SRC, '_partials');

const ACTIVE_STYLE = 'underline underline-offset-4 decoration-2';

// Local CSS link that replaces Tailwind CDN + Google Fonts
const LOCAL_CSS_LINK = '  <link rel="stylesheet" href="/assets/css/style.css">';

// Load partials
const partials = {
  nav: fs.readFileSync(path.join(PARTIALS_DIR, 'nav.html'), 'utf8'),
  'footer-full': fs.readFileSync(path.join(PARTIALS_DIR, 'footer-full.html'), 'utf8'),
  'footer-slim': fs.readFileSync(path.join(PARTIALS_DIR, 'footer-slim.html'), 'utf8'),
  scripts: fs.readFileSync(path.join(PARTIALS_DIR, 'scripts.html'), 'utf8'),
};

// Build tooling files — not site content, skip during copy
const SKIP_FILES = new Set([
  'build.js', 'package.json', 'package-lock.json', 'tailwind.config.js',
  '.gitignore', 'CONTRIBUTING.md', 'LICENSE', 'env.example.js',
]);

// Recursively find all files (excluding dist, _partials, .git, node_modules, docs)
function walkDir(dir, isRoot) {
  const results = [];
  const skipDirs = new Set(['dist', '_partials', '.git', 'node_modules', 'docs', '.github', '.wrangler']);
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!skipDirs.has(entry.name)) results.push(...walkDir(fullPath, false));
    } else {
      if (isRoot && SKIP_FILES.has(entry.name)) continue;
      results.push(fullPath);
    }
  }
  return results;
}

// Apply active link styling to nav HTML
function applyActiveLinks(navHtml, activeKey) {
  // Replace matching {{ACTIVE:key}} with the active style
  let result = navHtml.replace(new RegExp(`\\{\\{ACTIVE:${activeKey}\\}\\}`, 'g'), ACTIVE_STYLE);
  // Strip all remaining {{ACTIVE:*}} tokens
  result = result.replace(/\{\{ACTIVE:\w+\}\}/g, '');
  return result;
}

// Strip external CDN references and inject local CSS
// Removes: Tailwind CDN script + config, Google Fonts links, DNS prefetch for CDNs
function stripExternalCdn(html) {
  let output = html;
  let injected = false;

  // Remove DNS prefetch lines for CDNs
  output = output.replace(/^[ \t]*<link rel="dns-prefetch" href="https:\/\/cdn\.tailwindcss\.com">\s*\n?/gm, '');
  output = output.replace(/^[ \t]*<link rel="dns-prefetch" href="https:\/\/fonts\.googleapis\.com">\s*\n?/gm, '');
  output = output.replace(/^[ \t]*<link rel="dns-prefetch" href="https:\/\/fonts\.gstatic\.com">\s*\n?/gm, '');

  // Remove Tailwind CDN script tag + config block that follows
  // Pattern: <script src="...tailwindcss..."></script> then <script>tailwind.config = {...}</script>
  output = output.replace(
    /^[ \t]*(?:<!-- Tailwind CDN -->\s*\n)?[ \t]*<script src="https:\/\/cdn\.tailwindcss\.com[^"]*"><\/script>\s*\n[ \t]*<script>\s*\n[ \t]*tailwind\.config\s*=\s*\{[\s\S]*?\}\s*\n[ \t]*<\/script>\s*\n/gm,
    function(match) {
      if (!injected) {
        injected = true;
        return LOCAL_CSS_LINK + '\n';
      }
      return '';
    }
  );

  // Remove Google Fonts preconnect + stylesheet links
  output = output.replace(/^[ \t]*(?:<!-- Google Fonts[^>]*-->\s*\n)?[ \t]*<link rel="preconnect" href="https:\/\/fonts\.googleapis\.com">\s*\n/gm, '');
  output = output.replace(/^[ \t]*<link rel="preconnect" href="https:\/\/fonts\.gstatic\.com"[^>]*>\s*\n/gm, '');
  output = output.replace(/^[ \t]*<link href="https:\/\/fonts\.googleapis\.com\/css2[^"]*" rel="stylesheet">\s*\n/gm, '');

  // If we didn't inject yet (edge case), inject before </head>
  if (!injected && output.includes('</head>')) {
    output = output.replace('</head>', LOCAL_CSS_LINK + '\n</head>');
  }

  return output;
}

// Process a single HTML file
function processHtml(content, relPath) {
  // Always strip external CDN references from all HTML files
  let output = stripExternalCdn(content);

  // Check for build:config marker
  const configMatch = output.match(/<!--\s*build:config\s+(\{[^}]+\})\s*-->/);
  if (!configMatch) return output; // No further markers — return with CDN stripped

  const config = JSON.parse(configMatch[1]);
  const activeKey = config.nav || 'home';
  const footerType = config.footer || 'full';

  // Build the nav with active links applied
  const navHtml = applyActiveLinks(partials.nav, activeKey);

  // Select footer partial
  const footerHtml = footerType === 'slim' ? partials['footer-slim'] : partials['footer-full'];

  // Replace markers
  output = output.replace(/<!--\s*build:nav\s*-->/, navHtml);
  output = output.replace(/<!--\s*build:footer\s*-->/, footerHtml);
  output = output.replace(/<!--\s*build:scripts\s*-->/, partials.scripts);

  return output;
}

// Main build
function build() {
  // Clean dist
  if (fs.existsSync(DIST)) fs.rmSync(DIST, { recursive: true });
  fs.mkdirSync(DIST, { recursive: true });

  const allFiles = walkDir(SRC, true);
  let htmlCount = 0;
  let processedCount = 0;
  let copiedCount = 0;

  for (const filePath of allFiles) {
    const relPath = path.relative(SRC, filePath);
    const destPath = path.join(DIST, relPath);
    fs.mkdirSync(path.dirname(destPath), { recursive: true });

    if (filePath.endsWith('.html')) {
      htmlCount++;
      const content = fs.readFileSync(filePath, 'utf8');
      const processed = processHtml(content, relPath);
      fs.writeFileSync(destPath, processed);
      processedCount++;
    } else {
      fs.copyFileSync(filePath, destPath);
      copiedCount++;
    }
  }

  console.log(`Build complete:`);
  console.log(`  HTML files: ${htmlCount} (${processedCount} processed with partials)`);
  console.log(`  Other files copied: ${copiedCount}`);
  console.log(`  Output: ${DIST}/`);

  // Verify no leftover tokens and no external CDN references
  let tokensFound = 0;
  let externalRefs = 0;
  for (const filePath of walkDir(DIST)) {
    if (!filePath.endsWith('.html')) continue;
    const content = fs.readFileSync(filePath, 'utf8');
    const relFile = path.relative(DIST, filePath);

    const tokenMatches = content.match(/\{\{ACTIVE:\w+\}\}/g);
    if (tokenMatches) {
      console.error(`  WARNING: ${relFile} has leftover tokens: ${tokenMatches.join(', ')}`);
      tokensFound += tokenMatches.length;
    }

    // Check for external CDN references that should have been stripped
    if (/cdn\.tailwindcss\.com/.test(content)) {
      console.error(`  WARNING: ${relFile} still references cdn.tailwindcss.com`);
      externalRefs++;
    }
    if (/fonts\.googleapis\.com/.test(content)) {
      console.error(`  WARNING: ${relFile} still references fonts.googleapis.com`);
      externalRefs++;
    }
    if (/fonts\.gstatic\.com/.test(content)) {
      console.error(`  WARNING: ${relFile} still references fonts.gstatic.com`);
      externalRefs++;
    }
  }
  if (tokensFound === 0) {
    console.log(`  Verification: No leftover {{ACTIVE:*}} tokens found.`);
  } else {
    console.error(`  ERROR: ${tokensFound} leftover token(s) found!`);
    process.exit(1);
  }
  if (externalRefs === 0) {
    console.log(`  Verification: No external CDN references found (privacy clean).`);
  } else {
    console.error(`  ERROR: ${externalRefs} external CDN reference(s) still present!`);
    process.exit(1);
  }
}

build();

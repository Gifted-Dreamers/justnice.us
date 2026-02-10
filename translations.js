/**
 * justNICE.us — Spanish/English Translation System
 * Lightweight i18n for static HTML pages.
 *
 * Usage:
 *   1. Add data-i18n="key" to any element whose textContent should be translated.
 *   2. Add data-i18n-placeholder="key" for input/textarea placeholders.
 *   3. Add data-i18n-aria="key" for aria-label attributes.
 *   4. Include this script on every page and call initTranslation().
 *   5. The language toggle button should have id="lang-toggle".
 */

var JUSTNICE_TRANSLATIONS = {

  // ── Navigation ──────────────────────────────────────
  'nav.home':               { en: 'Home',                  es: 'Inicio' },
  'nav.resources':          { en: 'Immigrant Resources',   es: 'Recursos para Inmigrantes' },
  'nav.kyr':                { en: 'Know Your Rights',      es: 'Conoce Tus Derechos' },
  'nav.blog':               { en: 'Blog',                  es: 'Blog' },
  'nav.map':                { en: 'Resource Map',          es: 'Mapa de Recursos' },
  'nav.donate':             { en: 'Donate',                es: 'Donar' },

  // ── Landing Page Hero ──────────────────────────────
  'hero.title':             { en: 'Know Your Rights. Protect Your Community.',
                              es: 'Conoce Tus Derechos. Protege Tu Comunidad.' },
  'hero.subtitle':          { en: 'Free resources, legal guides, and community defense training — because preparation is power.',
                              es: 'Recursos gratuitos, guías legales y capacitación en defensa comunitaria — porque la preparación es poder.' },
  'hero.cta.resources':     { en: 'Immigrant Resources',   es: 'Recursos para Inmigrantes' },
  'hero.cta.kyr':           { en: 'Know Your Rights',      es: 'Conoce Tus Derechos' },

  // ── Landing Page Cards ─────────────────────────────
  'card.resources.title':   { en: 'Immigrant Resources',   es: 'Recursos para Inmigrantes' },
  'card.resources.desc':    { en: 'Comprehensive guide covering legal aid, rapid response networks, bond funds, family preparedness, and constitutional rights.',
                              es: 'Guía completa que cubre asistencia legal, redes de respuesta rápida, fondos de fianza, preparación familiar y derechos constitucionales.' },
  'card.kyr.title':         { en: 'Know Your Rights Training', es: 'Capacitación Conoce Tus Derechos' },
  'card.kyr.desc':          { en: 'S.A.L.U.T.E. framework, observer training, rapid response protocols, and community defense strategies.',
                              es: 'Marco S.A.L.U.T.E., capacitación de observadores, protocolos de respuesta rápida y estrategias de defensa comunitaria.' },
  'card.cta':               { en: 'Read Guide',            es: 'Leer Guía' },

  // ── Resource Map ───────────────────────────────────
  'map.title':              { en: 'Find Resources Near You', es: 'Encuentra Recursos Cerca de Ti' },
  'map.subtitle':           { en: 'Click a pin for details. Use the filters below to narrow by resource type.',
                              es: 'Haz clic en un marcador para más detalles. Usa los filtros para buscar por tipo de recurso.' },
  'map.filter.all':         { en: 'All',                   es: 'Todos' },
  'map.filter.hotline':     { en: 'Hotlines',              es: 'Líneas de Ayuda' },
  'map.filter.legal':       { en: 'Legal Aid',             es: 'Asistencia Legal' },
  'map.filter.mutual_aid':  { en: 'Mutual Aid',            es: 'Ayuda Mutua' },
  'map.filter.bond_fund':   { en: 'Bond Funds',            es: 'Fondos de Fianza' },
  'map.filter.training':    { en: 'Training',              es: 'Capacitación' },

  // ── Key Reminders ──────────────────────────────────
  'reminders.title':        { en: 'Key Reminders',         es: 'Recordatorios Clave' },
  'reminders.1':            { en: 'Everyone has constitutional rights regardless of immigration status',
                              es: 'Todos tienen derechos constitucionales sin importar su estado migratorio' },
  'reminders.2':            { en: 'You have the right to remain silent',
                              es: 'Tienes derecho a guardar silencio' },
  'reminders.3':            { en: 'Do not open the door without a judicial warrant',
                              es: 'No abras la puerta sin una orden judicial' },
  'reminders.4':            { en: 'Do not sign anything you do not understand',
                              es: 'No firmes nada que no entiendas' },
  'reminders.5':            { en: 'You have the right to an attorney',
                              es: 'Tienes derecho a un abogado' },
  'reminders.6':            { en: 'Memorize emergency contacts and your family preparedness plan',
                              es: 'Memoriza los contactos de emergencia y tu plan de preparación familiar' },

  // ── Donate Section ─────────────────────────────────
  'donate.title':           { en: 'Support Our Community',  es: 'Apoya a Nuestra Comunidad' },
  'donate.desc':            { en: 'All donations go 100% to mutual aid through Gifted Dreamers, Inc., a Texas-based 501(c)(3).',
                              es: 'Todas las donaciones van 100% a ayuda mutua a través de Gifted Dreamers, Inc., una organización 501(c)(3) de Texas.' },

  // ── Footer ─────────────────────────────────────────
  'footer.about.title':     { en: 'About justNICE',        es: 'Acerca de justNICE' },
  'footer.about.desc':      { en: 'justNICE provides free, community-sourced immigrant resources and Know Your Rights training guides. We believe preparation is power and that every person deserves access to information that protects their rights.',
                              es: 'justNICE proporciona recursos gratuitos para inmigrantes y guías de capacitación Conoce Tus Derechos. Creemos que la preparación es poder y que toda persona merece acceso a información que proteja sus derechos.' },
  'footer.contact.title':   { en: 'Share a Resource or Send a Message',
                              es: 'Comparte un Recurso o Envía un Mensaje' },
  'footer.contact.desc':    { en: 'Only message is required. All other fields are optional.',
                              es: 'Solo el mensaje es obligatorio. Los demás campos son opcionales.' },
  'footer.donate.title':    { en: 'Support Our Community',  es: 'Apoya a Nuestra Comunidad' },
  'footer.donate.desc':     { en: 'All donations go 100% to mutual aid.',
                              es: 'Todas las donaciones van 100% a ayuda mutua.' },
  'footer.copyright.org':   { en: 'Gifted Dreamers, Inc.', es: 'Gifted Dreamers, Inc.' },
  'footer.copyright.info':  { en: 'Texas-based 501(c)(3) EIN 39-3863796',
                              es: 'Organización 501(c)(3) de Texas EIN 39-3863796' },
  'footer.opensource':       { en: 'Open Source',            es: 'Código Abierto' },

  // ── Contact Form ───────────────────────────────────
  'form.message.label':     { en: 'Your message',          es: 'Tu mensaje' },
  'form.message.placeholder': { en: 'Paste a URL, share a resource, or send a message...',
                              es: 'Pega una URL, comparte un recurso o envía un mensaje...' },
  'form.name.label':        { en: 'Name',                  es: 'Nombre' },
  'form.name.placeholder':  { en: 'Your name',             es: 'Tu nombre' },
  'form.email.label':       { en: 'Email',                 es: 'Correo electrónico' },
  'form.email.placeholder': { en: 'Your email',            es: 'Tu correo electrónico' },
  'form.url.label':         { en: 'URL',                   es: 'URL' },
  'form.url.placeholder':   { en: 'URL to submit for addition', es: 'URL para agregar' },
  'form.category.label':    { en: 'Category / Section',    es: 'Categoría / Sección' },
  'form.category.select':   { en: 'Select a category...',  es: 'Selecciona una categoría...' },
  'form.category.general':  { en: 'General',               es: 'General' },
  'form.category.resources':{ en: 'Immigrant Resources',   es: 'Recursos para Inmigrantes' },
  'form.category.kyr':      { en: 'Know Your Rights',      es: 'Conoce Tus Derechos' },
  'form.category.blog':     { en: 'Blog',                  es: 'Blog' },
  'form.category.map':      { en: 'Resource Map',          es: 'Mapa de Recursos' },
  'form.category.other':    { en: 'Other',                 es: 'Otro' },
  'form.submit':            { en: 'Submit',                 es: 'Enviar' },
  'form.submit.anon':       { en: 'Send Anonymously',      es: 'Enviar Anónimamente' },
  'form.optional':          { en: '(optional)',             es: '(opcional)' },
  'form.success':           { en: 'Thank you! Your message has been sent.',
                              es: '¡Gracias! Tu mensaje ha sido enviado.' },
  'form.error':             { en: 'Something went wrong. Please try again.',
                              es: 'Algo salió mal. Inténtalo de nuevo.' },
  'form.sending':           { en: 'Sending...',            es: 'Enviando...' },

  // ── Page Titles ────────────────────────────────────
  'page.resources.title':   { en: 'Immigrant Resources & Community Defense Guide',
                              es: 'Guía de Recursos para Inmigrantes y Defensa Comunitaria' },
  'page.kyr.title':         { en: 'Know Your Rights — ICE Encounter Training',
                              es: 'Conoce Tus Derechos — Capacitación sobre Encuentros con ICE' },
  'page.blog.title':        { en: 'Blog',                  es: 'Blog' },
  'page.blog.subtitle':     { en: 'Analysis, research, and community defense strategies',
                              es: 'Análisis, investigación y estrategias de defensa comunitaria' },

  // ── Blog Article Titles ────────────────────────────
  'blog.surveillance.title': { en: 'Defeating Facial Recognition in an AI Surveillance Era',
                               es: 'Derrotando el Reconocimiento Facial en la Era de Vigilancia con IA' },
  'blog.market.title':       { en: 'Anti-Surveillance Technology & Wearables: Market Analysis',
                               es: 'Tecnología Anti-Vigilancia y Wearables: Análisis de Mercado' },

  // ── Breadcrumb ─────────────────────────────────────
  'breadcrumb.home':        { en: 'Home',                  es: 'Inicio' },
  'breadcrumb.resources':   { en: 'Immigrant Resources',   es: 'Recursos para Inmigrantes' },
  'breadcrumb.kyr':         { en: 'Know Your Rights',      es: 'Conoce Tus Derechos' },
  'breadcrumb.blog':        { en: 'Blog',                  es: 'Blog' },

  // ── Misc UI ────────────────────────────────────────
  'lang.toggle':            { en: 'Español',               es: 'English' },
  'lang.toggle.aria':       { en: 'Switch to Spanish',     es: 'Cambiar a inglés' },
  'resources.link':         { en: 'Resources',             es: 'Recursos' },
  'kyr.link':               { en: 'KYR Training',          es: 'Capacitación CDT' },
  'toc.title':              { en: 'Table of Contents',     es: 'Tabla de Contenidos' }
};

/**
 * Initialize the translation system.
 * Call this at the bottom of every page after DOM is ready.
 */
function initTranslation() {
  var savedLang = localStorage.getItem('justnice-language') || 'en';
  if (savedLang !== 'es' && savedLang !== 'en') savedLang = 'en';

  // Apply saved language on load
  applyLanguage(savedLang);

  // Set up toggle button(s)
  var toggleBtns = document.querySelectorAll('.lang-toggle-btn');
  toggleBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var current = localStorage.getItem('justnice-language') || 'en';
      var next = current === 'en' ? 'es' : 'en';
      localStorage.setItem('justnice-language', next);
      applyLanguage(next);
    });
  });
}

function applyLanguage(lang) {
  // Update document lang attribute
  document.documentElement.lang = lang;

  // Translate data-i18n elements (textContent)
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    var t = JUSTNICE_TRANSLATIONS[key];
    if (t && t[lang]) {
      // Preserve child elements (like images) by only updating text nodes
      var img = el.querySelector('img');
      if (img) {
        // Element has an image child — update text after image
        var textNodes = [];
        for (var i = 0; i < el.childNodes.length; i++) {
          if (el.childNodes[i].nodeType === 3) textNodes.push(el.childNodes[i]);
        }
        if (textNodes.length > 0) {
          textNodes[textNodes.length - 1].textContent = ' ' + t[lang];
        }
      } else {
        el.textContent = t[lang];
      }
    }
  });

  // Translate placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
    var key = el.getAttribute('data-i18n-placeholder');
    var t = JUSTNICE_TRANSLATIONS[key];
    if (t && t[lang]) el.placeholder = t[lang];
  });

  // Translate aria-labels
  document.querySelectorAll('[data-i18n-aria]').forEach(function(el) {
    var key = el.getAttribute('data-i18n-aria');
    var t = JUSTNICE_TRANSLATIONS[key];
    if (t && t[lang]) el.setAttribute('aria-label', t[lang]);
  });

  // Update toggle button text
  var toggleText = JUSTNICE_TRANSLATIONS['lang.toggle'];
  document.querySelectorAll('.lang-toggle-btn').forEach(function(btn) {
    var span = btn.querySelector('.lang-label');
    if (span && toggleText) span.textContent = toggleText[lang];
    if (toggleText) btn.setAttribute('aria-label', JUSTNICE_TRANSLATIONS['lang.toggle.aria'][lang]);
  });
}

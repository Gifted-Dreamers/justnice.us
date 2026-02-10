# Contributing to justnice.us

Thank you for your interest in contributing to justnice.us. This site provides immigrant resources, Know Your Rights training guides, and articles on anti-surveillance technology. It is maintained by [Gifted Dreamers, Inc.](https://gifteddreamers.org), a Texas-based 501(c)(3) nonprofit.

Whether you write code, speak multiple languages, work in immigration law, or simply want to help keep information accurate, there is a place for you here.

---

## Ways to Contribute

There are many ways to help that do not require writing code:

- **Report resource updates.** Phone numbers, URLs, and organizations change. If you notice outdated contact information or a broken link, open a [GitHub Issue](https://github.com/Gifted-Dreamers/justnice.us/issues) with the details.
- **Submit new resources.** Know of an organization, hotline, or legal aid provider that should be listed? Use the contact form on the site or open an issue describing the resource and why it should be included.
- **Fix broken links or outdated information.** If you can verify that a link is dead or a phone number has changed, let us know or submit a pull request with the correction.
- **Improve accessibility.** We aim for the site to be usable by everyone. If you find barriers related to screen readers, keyboard navigation, color contrast, or anything else, please report them.
- **Add translations.** Spanish translations are the highest priority, but all languages are welcome. If you can translate a page, open an issue to coordinate or submit a pull request.
- **Report bugs or suggest improvements.** Layout issues, typos, mobile rendering problems, or ideas for new features are all welcome as GitHub Issues.
- **Submit blog articles.** If you have expertise in anti-surveillance technology, digital privacy, immigration law, or related topics, we welcome article submissions. Open an issue with a brief pitch or draft.

---

## How to Contribute Code

This is a static HTML site with no build step. Contributing is straightforward.

1. **Fork the repository.** Go to [github.com/Gifted-Dreamers/justnice.us](https://github.com/Gifted-Dreamers/justnice.us) and click Fork.

2. **Clone your fork and create a feature branch.**
   ```bash
   git clone https://github.com/YOUR-USERNAME/justnice.us.git
   cd justnice.us
   git checkout -b your-branch-name
   ```

3. **Make your changes.** Edit HTML files directly. There is no build step, no package manager, and no framework to configure.

4. **Test locally.** From the project root, start a local server:
   ```bash
   python3 -m http.server 8080
   ```
   Then open `http://localhost:8080` in your browser. Check your changes on both desktop and mobile screen sizes.

5. **Commit and push.**
   ```bash
   git add -A
   git commit -m "Brief description of changes"
   git push origin your-branch-name
   ```

6. **Open a pull request.** Go to your fork on GitHub and click "Compare & pull request." Provide a clear description of what you changed and why.

Deployments happen automatically when changes are merged to `main` via GitHub Actions.

---

## Coding Guidelines

- **Pure static HTML.** Do not introduce JavaScript frameworks, bundlers, or build tools. The site uses no npm, no React, and no compiled assets.
- **Tailwind CSS via CDN.** Styles are applied using Tailwind utility classes loaded from the CDN. Do not add compiled CSS files or a local Tailwind build.
- **Color scheme.** Follow the existing palette:
  - Maroon: `#8B1A2B`
  - Teal: `#0097A7`
  - Gold: `#F5A623`
- **Phone numbers.** All phone numbers must be wrapped in click-to-call links:
  ```html
  <a href="tel:+18005551234">(800) 555-1234</a>
  ```
- **External links.** All links to external sites must include safety attributes:
  ```html
  <a href="https://example.org" target="_blank" rel="noopener noreferrer">Example</a>
  ```
- **Responsive design.** Use a mobile-first approach. Test at small screen sizes before large ones.
- **Accessibility.** Use semantic HTML elements (`nav`, `main`, `section`, `article`, `header`, `footer`). Include ARIA labels where appropriate. Ensure all interactive elements are reachable via keyboard navigation. Provide meaningful `alt` text for images.

---

## Content Guidelines

- **Verify resources.** Any organization, hotline, or service listed on the site must be verified as currently active before submission. Include a source or link demonstrating the resource is operational.
- **No personally identifiable information.** Do not include names, addresses, case numbers, or any other information that could identify community members.
- **Verify hotline numbers.** Phone numbers for hotlines and legal aid must be confirmed as current. If you are updating a number, note how you verified it.
- **Cite legal sources.** Any legal information or guidance must cite its source (statute, regulation, official guidance document, or qualified legal organization).

---

## Code of Conduct

We expect all contributors to communicate respectfully. This project serves vulnerable communities, and maintaining a safe, welcoming environment is essential. Harassment, discrimination, and hostile behavior will not be tolerated. Maintainers reserve the right to remove comments, close issues, or block contributors who do not uphold these standards.

---

## Questions?

If you are unsure about anything, have a question, or want to discuss an idea before submitting a pull request:

- Open a [GitHub Issue](https://github.com/Gifted-Dreamers/justnice.us/issues)
- Use the contact form on [justnice.us](https://justnice.us)

We appreciate every contribution, large or small. Thank you for helping keep these resources accurate and accessible.

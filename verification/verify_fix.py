from playwright.sync_api import sync_playwright

def verify_translation_sanitization():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to the local server
        page.goto("http://localhost:8080/index.html")

        # Inject a malicious translation entry to test sanitization
        # We need to do this before the translation logic runs or re-run it
        # Since initTranslation runs on DOMContentLoaded, we might need to trigger it manually or reload with injection
        # However, checking existing elements is safer.
        # Let's verify that existing translations with HTML tags (like strong, a) are rendered correctly
        # and not stripped entirely or broken.

        # Check an element that uses HTML in translation
        # 'reminders.home.1.lead' contains <strong> tags in translations.js
        # We need to find where this is used.
        # It's used in index.html.

        # Wait for translation to apply
        page.wait_for_selector("[data-i18n='reminders.home.1.lead']")

        # Take a screenshot of the Key Reminders section
        reminders_section = page.locator("section").filter(has_text="Key Reminders")
        reminders_section.screenshot(path="verification/reminders_section.png")

        # Check if <strong> tags are preserved (by checking computed style or just visual)
        # Visual check via screenshot is good.

        # Now let's try to inject a malicious string and apply it to a temporary element to verify sanitization
        page.evaluate("""
            var testEl = document.createElement('div');
            testEl.id = 'security-test';
            document.body.appendChild(testEl);
            var malicious = '<img src=x onerror=alert(1)>Safe Text';
            var sanitized = sanitizeHTML(malicious);
            testEl.innerHTML = sanitized;
        """)

        # Take a screenshot of the test element area
        page.screenshot(path="verification/security_test.png")

        # Verify programmatically that the img tag is gone
        content = page.locator("#security-test").inner_html()
        print(f"Sanitized content: {content}")

        if "<img" in content:
            print("FAILED: Image tag was not stripped")
        else:
            print("PASSED: Image tag was stripped")

        browser.close()

if __name__ == "__main__":
    verify_translation_sanitization()
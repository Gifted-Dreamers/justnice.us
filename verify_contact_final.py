from playwright.sync_api import sync_playwright, expect

def verify_contact_form(page):
    # Navigate to the page
    page.goto('http://localhost:8080/kyr-ice-training.html')

    # Check if the form has the correct data-source
    form = page.locator('#contact-form')
    expect(form).to_have_attribute('data-source', 'justnice.us')

    # Check if the contact.js script is loaded
    is_defined = page.evaluate("typeof submitContactForm === 'function'")
    assert is_defined, "submitContactForm is not defined on the page"

    # Check if JUSTNICE_CONFIG is defined
    config_defined = page.evaluate("typeof window.JUSTNICE_CONFIG !== 'undefined'")
    assert config_defined, "window.JUSTNICE_CONFIG is not defined"

    # Fill out the form
    page.fill('#contact-message', 'Test message from Playwright verification')

    # Intercept the network request to verify the URL
    with page.expect_request(lambda request: request.url == 'https://n8n.cloudpublica.org/webhook/justnice-contact' and request.method == 'POST') as first:
        # Click submit
        page.click('button[type="submit"]')

    print("Network request intercepted correctly.")

    page.screenshot(path='verification_final.png')

if __name__ == '__main__':
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        try:
            verify_contact_form(page)
            print("Verification successful!")
        except Exception as e:
            print(f"Verification failed: {e}")
        finally:
            browser.close()

from playwright.sync_api import sync_playwright, expect
import re

def verify_mobile_menu(page):
    # Navigate to the page
    page.goto('http://localhost:8080/kyr-ice-training.html')

    # Set viewport to mobile
    page.set_viewport_size({"width": 375, "height": 667})

    # Verify mobile menu button is visible
    menu_btn = page.locator('#mobile-menu-btn')
    expect(menu_btn).to_be_visible()

    # Click the menu button
    menu_btn.click()

    # Verify the mobile menu is visible (class hidden removed)
    mobile_menu = page.locator('#mobile-menu')
    expect(mobile_menu).not_to_have_class(re.compile(r"hidden"))

    print("Mobile menu toggled successfully.")

    # Take a screenshot
    page.screenshot(path='verification_mobile.png')

if __name__ == '__main__':
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        try:
            verify_mobile_menu(page)
            print("Mobile menu verification successful!")
        except Exception as e:
            print(f"Verification failed: {e}")
        finally:
            browser.close()

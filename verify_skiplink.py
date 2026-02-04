from playwright.sync_api import Page, expect, sync_playwright
import os

def test_skiplink(page: Page):
    # 1. Arrange: Go to the homepage.
    page.goto("http://localhost:3000")

    # 2. Act: Press Tab to focus the first element (which should be our skip link)
    page.keyboard.press("Tab")

    # 3. Assert: Check if the skip link is visible and focused
    skiplink = page.locator("a[href='#main-content']")
    expect(skiplink).to_be_visible()
    expect(skiplink).to_be_focused()
    expect(skiplink).to_have_text("Skip to content")

    # 4. Screenshot: Capture the state with the skip link visible
    page.screenshot(path="/home/jules/verification/skiplink.png")
    print("Screenshot saved to /home/jules/verification/skiplink.png")

if __name__ == "__main__":
    os.makedirs("/home/jules/verification", exist_ok=True)
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            test_skiplink(page)
        finally:
            browser.close()

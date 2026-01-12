
from playwright.sync_api import sync_playwright, expect

def test_skip_link():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to the home page
        page.goto("http://localhost:3000")

        # Wait for content to load
        page.wait_for_selector("body")

        # Initial state: Skip link should be hidden (translated out of view)
        skip_link = page.get_by_text("Skip to content")
        expect(skip_link).to_be_attached()

        # Press Tab to focus the skip link
        page.keyboard.press("Tab")

        # Now it should be focused and visible (we'll check if it has the focus class or position)
        # In our CSS: -translate-y-[150%] becomes translate-y-0 on focus

        expect(skip_link).to_be_focused()

        # Take a screenshot of the focused skip link
        page.screenshot(path="verification/skip_link_focused.png")
        print("Screenshot taken: verification/skip_link_focused.png")

        # Press Enter to activate it
        page.keyboard.press("Enter")

        # Check if the URL has the hash or if the main content is focused
        # Note: Browsers might not focus the element visually if it's just an ID target,
        # but the scroll position should change.
        # Since we are at the top, scroll might not change if the header is at top?
        # No, header is h-[60vh].
        # Wait, the skip link href is #main-content. The target is the <header> which is at the top?
        # If <header> is the first element after navigation, it might just be the top of the page.
        # But let's check if the URL changes to include #main-content

        expect(page).to_have_url("http://localhost:3000/#main-content")
        print("URL updated to include #main-content")

        browser.close()

if __name__ == "__main__":
    test_skip_link()

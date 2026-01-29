from playwright.sync_api import sync_playwright

def verify_skip_link(page):
    # Go to home page
    page.goto("http://localhost:3000")

    # Wait for hydration/content
    page.wait_for_selector("h1")

    # Press Tab to focus the first element.
    # Since SkipLink is at the top of body, it should be the first focusable element.
    page.keyboard.press("Tab")

    # Check if the active element is the skip link
    # We can check the text or href.
    focused_element = page.evaluate("document.activeElement.innerText")
    print(f"Focused element text: {focused_element}")

    # Take screenshot
    page.screenshot(path="verification/skip_link_focused.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_skip_link(page)
        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

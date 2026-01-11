# How to Manage Your Photos

## 1. Where do I put photos?
All your content lives in the `public/photos` folder.
Inside that folder, you should see these specific Category folders:
*   `Commissioned`
*   `Personal Projects`
*   `Fashion`
*   `Portrait`
*   `Travel`
*   `Analogue`
*   `Miscellaneous`

> **Note:** Do not rename these Category folders, or the website design will break.

---

## 2. How to Add a New Project
To add a new set of photos (e.g., "Paris Trip" inside "Travel"):

1.  Open the **Category** folder (e.g., `public/photos/Travel`).
2.  **Create a New Folder** inside it. Name it whatever you want the title to be (e.g., `Paris Trip`).
3.  **Drop your photos** into that new `Paris Trip` folder.
    *   *Supported files:* JPG, PNG, WebP.
    *   *Tip:* The website will order them alphabetically. Name them `01.jpg`, `02.jpg` to control the order.

**Correct Structure Example:**
`public/photos/Travel/Paris Trip/photo1.jpg`

---

## 3. "Why are they not showing up?"

### A. Are you looking at the live website?
**Crucial:** Dragging files on your computer **does not** magically send them to the internet.
*   **If you are developing locally:** You should see them immediately (refresh the page).
*   **If you are checking your .com website:** You must **Publish/Deploy** your changes.
    *   If you use GitHub + Vercel: You need to commit and push these new photo files to GitHub.
    *   If you use a hosting provider: You need to upload the new files to your server.

### B. Is the folder empty?
A project will not appear on the website until it has **at least one valid image** inside it.

### C. Check the File Type
Make sure your images are `.jpg`, `.jpeg`, `.png`, or `.webp`.
(iPhone `.heic` files are often not supported by web browsers directly—convert them to JPG first).

---

## 4. How to Publish (If using GitHub)
If you are using GitHub Desktop or command line to manage this site:
1.  Add your photo files.
2.  **Commit** the changes (Message: "Added Paris photos").
3.  **Push** to the main branch.
4.  Wait for your hosting (e.g., Vercel) to rebuild the site.

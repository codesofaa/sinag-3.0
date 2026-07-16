# SINAG Archetype Quiz Embed

This project now includes a custom interactive quiz for **"Alamin ang Ilaw Mo sa SINAG"**.

## Files added

- `quiz.html` — standalone quiz page that can be opened directly or embedded using an iframe.
- `assets/archetypes/` — cropped archetype mascot/result images.
- `index.html` — now includes a new **Quiz** section that embeds `quiz.html`.
- `style.css` — added iframe/card styling for the quiz section.
- `script.js` — added auto-height support for the embedded iframe.

## How to use in the current website

Upload the full project to GitHub/Vercel like usual. The homepage now has a **Quiz** navigation item and a quiz section.

Direct quiz URL after deployment:

```txt
https://your-vercel-site.vercel.app/quiz.html
```

## How to embed the quiz in another page

Paste this where you want the quiz to appear:

```html
<section id="quiz">
  <iframe
    id="sinagQuizFrame"
    src="quiz.html"
    title="Alamin ang Ilaw Mo sa SINAG quiz"
    style="width:100%; min-height:900px; border:0; border-radius:28px; overflow:hidden;"
    loading="lazy">
  </iframe>
</section>

<script>
  const sinagQuizFrame = document.querySelector('#sinagQuizFrame');
  window.addEventListener('message', function (event) {
    if (!sinagQuizFrame || event.source !== sinagQuizFrame.contentWindow) return;
    if (!event.data || event.data.type !== 'sinagQuizHeight') return;
    sinagQuizFrame.style.height = Math.max(760, event.data.height + 24) + 'px';
  });
</script>
```

If the quiz is embedded from your deployed Vercel link, replace `src="quiz.html"` with your full quiz URL.

## Optional: Save quiz submissions to Google Sheets

The quiz already computes results instantly on screen. If you also want to save responses to Google Sheets:

1. Create a Google Sheet.
2. Go to **Extensions > Apps Script**.
3. Paste the code from `google-sheets-webapp.gs`.
4. Replace `PASTE_YOUR_SHEET_ID_HERE` with your Google Sheet ID.
5. Deploy as **Web app**.
6. Copy the Web App URL.
7. Open `quiz.html` and paste it here:

```js
const GOOGLE_SHEETS_WEB_APP_URL = "PASTE_WEB_APP_URL_HERE";
```

If this is left blank, the quiz still works but will not save submissions.

## Naming note

This version uses **Tagahubog** in the quiz text while keeping the existing `tagahubog.png` image filename.

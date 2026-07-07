/*
  Optional Google Sheets collector for the SINAG Archetype Quiz.

  Setup:
  1. Create a Google Sheet.
  2. Extensions > Apps Script.
  3. Paste this file.
  4. Replace PASTE_YOUR_SHEET_ID_HERE.
  5. Deploy > New deployment > Web app.
     - Execute as: Me
     - Who has access: Anyone
  6. Copy the Web App URL into quiz.html:
     const GOOGLE_SHEETS_WEB_APP_URL = "YOUR_WEB_APP_URL";
*/

const SHEET_ID = "PASTE_YOUR_SHEET_ID_HERE";
const SHEET_NAME = "SINAG Quiz Responses";

function doPost(e) {
  try {
    const ss = SpreadsheetApp.openById(SHEET_ID);
    let sheet = ss.getSheetByName(SHEET_NAME);

    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow([
        "Submitted At",
        "Result",
        "Winner Codes",
        "L Score",
        "H Score",
        "T Score",
        "B Score",
        "S Score",
        "Answers JSON"
      ]);
    }

    const data = JSON.parse(e.postData.contents || "{}");
    const scores = data.scores || {};

    sheet.appendRow([
      data.submittedAt || new Date().toISOString(),
      data.result || "",
      Array.isArray(data.winners) ? data.winners.join(" + ") : "",
      scores.L || 0,
      scores.H || 0,
      scores.T || 0,
      scores.B || 0,
      scores.S || 0,
      JSON.stringify(data.answers || [])
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(error) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

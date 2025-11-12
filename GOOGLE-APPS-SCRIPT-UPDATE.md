# Google Apps Script Update - Add Count Endpoint

## What This Does

Your website now tries to fetch the real waitlist count from your Google Sheets to display social proof.

## How to Update Your Google Apps Script

1. Go to your Google Apps Script project: https://script.google.com
2. Find your existing script (the one with the URL in script.js)
3. Add this code to handle the count request:

```javascript
function doGet(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Check if this is a count request
    if (e.parameter.action === 'count') {
      // Count non-empty rows (excluding header)
      const lastRow = sheet.getLastRow();
      const count = lastRow > 1 ? lastRow - 1 : 0;

      return ContentService
        .createTextOutput(JSON.stringify({ count: count }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // Default response for other GET requests
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, message: 'Unknown action' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Your existing doPost function stays the same
function doPost(e) {
  // ... your existing code ...
}
```

## Important Notes

- **CORS**: The script needs to allow CORS for the count to work
- **Deployment**: After adding the code, click "Deploy" > "Manage Deployments" > "Edit" > "New Version" > "Deploy"
- **Testing**: Visit `YOUR_SCRIPT_URL?action=count` to test it returns `{"count": X}`

## If You Don't Want to Update the Script

The website will work fine without it! The features that DON'T need the script update:
- ✅ Exit-intent popup (works)
- ✅ Sticky CTA button (works)
- ✅ Scroll progress bar (works)
- ✅ Share buttons (works)
- ✅ Keyboard shortcuts (works)
- ✅ Dark mode (works)

Features that won't show without the script update:
- ❌ Real waitlist counter (won't display, but form still works)
- ❌ Social proof notifications (won't show, but harmless)

The website will gracefully handle the missing count and just not show those elements.

## Alternative: Remove Count Features

If you don't want to update the script, you can comment out these lines in script.js:

```javascript
// Line 85: Comment out this line
// document.addEventListener('DOMContentLoaded', updateWaitlistCounters);

// Lines 517-518: Comment out these lines
// setTimeout(startSocialProofNotifications, 10000);
```

Everything else will work perfectly!

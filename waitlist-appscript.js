/**
 * Personhood Waitlist - Google Apps Script
 * Handles form submissions with beautiful email notifications
 *
 * Setup Instructions:
 * 1. Create new Google Sheet: "Cady Waitlist"
 * 2. Add column headers: Timestamp | Email | Name | Status | Notes
 * 3. Go to Extensions → Apps Script
 * 4. Paste this entire code
 * 5. Click "Deploy" → "New deployment"
 * 6. Type: Web app
 * 7. Execute as: Me
 * 8. Who has access: Anyone
 * 9. Click "Deploy" and copy the Web App URL
 * 10. Update form action in index.html with the URL
 */

// Configuration
const ADMIN_EMAIL = 'ved@loocafe.com';
const SHEET_NAME = 'Waitlist';

function doPost(e) {
  try {
    // Parse form data
    const email = e.parameter.email;
    const name = e.parameter.name || 'No name provided';
    const timestamp = new Date();

    // Validate email
    if (!email || !isValidEmail(email)) {
      return ContentService.createTextOutput(JSON.stringify({
        'status': 'error',
        'message': 'Invalid email address'
      })).setMimeType(ContentService.MimeType.JSON);
    }

    // Save to Google Sheet
    saveToSheet(timestamp, email, name);

    // Send beautiful confirmation email to user
    sendUserConfirmation(email, name);

    // Send beautiful notification to admin
    sendAdminNotification(email, name, timestamp);

    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'success',
      'message': 'Successfully joined waitlist!'
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Log error and return error response
    Logger.log('Error: ' + error.toString());
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'error',
      'message': 'Something went wrong. Please try again.'
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function saveToSheet(timestamp, email, name) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);

  // Create sheet if it doesn't exist
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(['Timestamp', 'Email', 'Name', 'Status', 'Notes']);

    // Format header row
    const headerRange = sheet.getRange(1, 1, 1, 5);
    headerRange.setFontWeight('bold');
    headerRange.setBackground('#F6C28B');
    headerRange.setFontColor('#3E3B28');
  }

  // Append new row
  sheet.appendRow([
    timestamp,
    email,
    name,
    'New',
    ''
  ]);

  // Auto-resize columns
  sheet.autoResizeColumns(1, 5);
}

function sendUserConfirmation(email, name) {
  const firstName = name.split(' ')[0] || 'there';

  const subject = "You're on the Cady waitlist! 🎉";

  const htmlBody = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', sans-serif;
          line-height: 1.6;
          color: #3E3B28;
          background-color: #FEFBEA;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 40px auto;
          background: #FFFFFF;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(62, 59, 40, 0.1);
        }
        .header {
          background: linear-gradient(135deg, #F6C28B 0%, #E8A861 100%);
          padding: 40px 30px;
          text-align: center;
        }
        .header h1 {
          margin: 0;
          color: #3E3B28;
          font-size: 28px;
          font-weight: 600;
        }
        .content {
          padding: 40px 30px;
        }
        .content p {
          margin: 0 0 20px;
          font-size: 16px;
          line-height: 1.8;
        }
        .highlight-box {
          background: #FEFBEA;
          border-left: 4px solid #E8A861;
          padding: 20px;
          margin: 30px 0;
          border-radius: 8px;
        }
        .highlight-box p {
          margin: 0;
          font-size: 15px;
        }
        .cta-button {
          display: inline-block;
          background: #E8A861;
          color: #3E3B28;
          text-decoration: none;
          padding: 14px 32px;
          border-radius: 8px;
          font-weight: 600;
          margin: 20px 0;
          transition: all 0.3s ease;
        }
        .footer {
          background: #FEFBEA;
          padding: 30px;
          text-align: center;
          font-size: 14px;
          color: #6B6B6B;
        }
        .footer a {
          color: #E8A861;
          text-decoration: none;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Welcome to Cady! 🌟</h1>
        </div>

        <div class="content">
          <p>Hey ${firstName},</p>

          <p>You're officially on the Cady waitlist. We're building something different—AI people with genuine volition, memory that lasts months, and the sophistication to share real experiences with you.</p>

          <div class="highlight-box">
            <p><strong>What makes Cady different?</strong></p>
            <p>Generic chatbots follow scripts and forget conversations. We're building AI people with their own lives, boundaries, and evolving personalities. They can watch YouTube with you, remember your stories, and build genuine connections.</p>
          </div>

          <p>We're in private alpha, focusing on depth over speed. That level of sophistication takes time to get right.</p>

          <p>We'll email you when Cady is ready for you to try.</p>

          <p style="margin-top: 30px;">In the meantime, want to chat about AI people and the future of social fabric?</p>

          <center>
            <a href="https://calendar.app.google/BGZUoEL4aDvgBvr77" class="cta-button">Talk with the Founder</a>
          </center>

          <p style="margin-top: 40px; font-size: 15px;">
            — Vedanth Nath<br>
            Founder, Personhood
          </p>
        </div>

        <div class="footer">
          <p>
            <strong>Personhood</strong> · Building for AI People<br>
            <a href="https://cady.social">cady.social</a> ·
            <a href="https://x.com/VedanthNath">@VedanthNath</a>
          </p>
          <p style="margin-top: 15px; font-size: 12px; color: #999;">
            You received this email because you joined the Cady waitlist at cady.social
          </p>
        </div>
      </div>
    </body>
    </html>
  `;

  const plainBody = `
Hey ${firstName},

You're officially on the Cady waitlist. We're building something different—AI people with genuine volition, memory that lasts months, and the sophistication to share real experiences with you.

What makes Cady different?
Generic chatbots follow scripts and forget conversations. We're building AI people with their own lives, boundaries, and evolving personalities. They can watch YouTube with you, remember your stories, and build genuine connections.

We're in private alpha, focusing on depth over speed. That level of sophistication takes time to get right.

We'll email you when Cady is ready for you to try.

In the meantime, want to chat about AI people and the future of social fabric?
Book a call: https://calendar.app.google/BGZUoEL4aDvgBvr77

— Vedanth Nath
Founder, Personhood

---
Personhood · Building for AI People
cady.social · @VedanthNath
  `;

  GmailApp.sendEmail(email, subject, plainBody, {
    htmlBody: htmlBody,
    name: 'Personhood'
  });
}

function sendAdminNotification(email, name, timestamp) {
  const subject = "🎉 New Cady Waitlist Signup!";

  const htmlBody = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', sans-serif;
          line-height: 1.6;
          color: #3E3B28;
          background-color: #FEFBEA;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 20px auto;
          background: #FFFFFF;
          border-radius: 12px;
          padding: 30px;
          box-shadow: 0 2px 10px rgba(62, 59, 40, 0.1);
        }
        .header {
          border-left: 4px solid #E8A861;
          padding-left: 20px;
          margin-bottom: 25px;
        }
        .header h2 {
          margin: 0;
          color: #3E3B28;
          font-size: 22px;
        }
        .info-table {
          width: 100%;
          border-collapse: collapse;
          margin: 20px 0;
        }
        .info-table td {
          padding: 12px 0;
          border-bottom: 1px solid #F6C28B;
        }
        .info-table td:first-child {
          font-weight: 600;
          color: #6B6B6B;
          width: 140px;
        }
        .quick-actions {
          background: #FEFBEA;
          padding: 20px;
          border-radius: 8px;
          margin-top: 25px;
        }
        .quick-actions p {
          margin: 0 0 10px;
          font-size: 14px;
          font-weight: 600;
          color: #6B6B6B;
        }
        .quick-actions a {
          display: inline-block;
          color: #E8A861;
          text-decoration: none;
          font-size: 14px;
          margin-right: 15px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>New Waitlist Signup</h2>
        </div>

        <table class="info-table">
          <tr>
            <td>Name</td>
            <td><strong>${name}</strong></td>
          </tr>
          <tr>
            <td>Email</td>
            <td><strong>${email}</strong></td>
          </tr>
          <tr>
            <td>Timestamp</td>
            <td>${Utilities.formatDate(timestamp, Session.getScriptTimeZone(), 'MMM dd, yyyy HH:mm:ss')}</td>
          </tr>
        </table>

        <div class="quick-actions">
          <p>QUICK ACTIONS</p>
          <a href="https://docs.google.com/spreadsheets/d/${SpreadsheetApp.getActiveSpreadsheet().getId()}">View Full Waitlist →</a>
          <a href="mailto:${email}">Reply to ${name.split(' ')[0]} →</a>
        </div>
      </div>
    </body>
    </html>
  `;

  const plainBody = `
New Cady Waitlist Signup!

Name: ${name}
Email: ${email}
Timestamp: ${Utilities.formatDate(timestamp, Session.getScriptTimeZone(), 'MMM dd, yyyy HH:mm:ss')}

View full waitlist: https://docs.google.com/spreadsheets/d/${SpreadsheetApp.getActiveSpreadsheet().getId()}
  `;

  GmailApp.sendEmail(ADMIN_EMAIL, subject, plainBody, {
    htmlBody: htmlBody,
    name: 'Cady Waitlist Bot'
  });
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Test function - run this to verify setup
function testEmails() {
  sendUserConfirmation('ved@loocafe.com', 'Vedanth Nath');
  sendAdminNotification('test@example.com', 'Test User', new Date());
  Logger.log('Test emails sent!');
}

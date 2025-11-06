/**
 * Personhood Waitlist - Google Apps Script
 * Handles form submissions with beautiful email notifications
 *
 * SETUP INSTRUCTIONS:
 *
 * STEP 1: Initialize the spreadsheet
 *   - Run the function: setupSheet() (select it from dropdown, click Run)
 *   - This creates the beautiful formatted sheet automatically
 *
 * STEP 2: Test emails (optional)
 *   - Run the function: testEmails()
 *   - Check ved@loocafe.com inbox for beautiful test emails
 *
 * STEP 3: Deploy as Web App
 *   - Click "Deploy" → "New deployment"
 *   - Type: Web app
 *   - Execute as: Me
 *   - Who has access: Anyone
 *   - Click "Deploy" and copy the Web App URL
 *
 * STEP 4: Update website
 *   - Paste URL into script.js line 57
 */

// Configuration
const ADMIN_EMAIL = 'ved@loocafe.com';
const SHEET_NAME = 'Waitlist';
const DATE_FORMAT = 'dd/MM/yy HH:mm'; // DD/MM/YY format

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

  // Create sheet if it doesn't exist with beautiful formatting
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);

    // Setup headers
    sheet.appendRow(['#', 'Timestamp', 'Name', 'Email', 'Status', 'Notes']);

    // Format header row - Beautiful Personhood style
    const headerRange = sheet.getRange(1, 1, 1, 6);
    headerRange.setFontWeight('bold');
    headerRange.setBackground('#F6C28B'); // Warm peach
    headerRange.setFontColor('#3E3B28'); // Dark brown
    headerRange.setFontSize(11);
    headerRange.setVerticalAlignment('middle');
    headerRange.setHorizontalAlignment('center');

    // Add borders to header
    headerRange.setBorder(true, true, true, true, true, true, '#3E3B28', SpreadsheetApp.BorderStyle.SOLID_MEDIUM);

    // Set column widths for better readability
    sheet.setColumnWidth(1, 50);   // Serial number - narrow
    sheet.setColumnWidth(2, 180);  // Timestamp - wider
    sheet.setColumnWidth(3, 150);  // Name
    sheet.setColumnWidth(4, 250);  // Email - widest
    sheet.setColumnWidth(5, 120);  // Status
    sheet.setColumnWidth(6, 300);  // Notes - wide for comments

    // Freeze header row
    sheet.setFrozenRows(1);

    // Setup Status dropdown with validation
    setupStatusDropdown(sheet);

    // Add conditional formatting for status colors
    setupConditionalFormatting(sheet);
  }

  // Calculate serial number (row count - 1 for header)
  const serialNumber = sheet.getLastRow();

  // Append new row with serial number
  const newRow = [
    serialNumber,                                    // Serial #
    Utilities.formatDate(timestamp, Session.getScriptTimeZone(), DATE_FORMAT), // Formatted timestamp (DD/MM/YY)
    name,                                           // Name
    email,                                          // Email
    'New',                                          // Status (default)
    ''                                              // Notes (empty)
  ];

  sheet.appendRow(newRow);

  // Get the row that was just added
  const lastRow = sheet.getLastRow();
  const dataRange = sheet.getRange(lastRow, 1, 1, 6);

  // Format the new row
  dataRange.setFontSize(10);
  dataRange.setVerticalAlignment('middle');

  // Add borders to new row
  dataRange.setBorder(true, true, true, true, true, true, '#E8E8E8', SpreadsheetApp.BorderStyle.SOLID);

  // Center align serial number, timestamp, and status
  sheet.getRange(lastRow, 1).setHorizontalAlignment('center'); // Serial
  sheet.getRange(lastRow, 2).setHorizontalAlignment('center'); // Timestamp
  sheet.getRange(lastRow, 5).setHorizontalAlignment('center'); // Status

  // Left align name, email, notes
  sheet.getRange(lastRow, 3).setHorizontalAlignment('left');   // Name
  sheet.getRange(lastRow, 4).setHorizontalAlignment('left');   // Email
  sheet.getRange(lastRow, 6).setHorizontalAlignment('left');   // Notes

  // Alternating row colors for better readability
  if (lastRow % 2 === 0) {
    dataRange.setBackground('#FEFBEA'); // Light cream for even rows
  } else {
    dataRange.setBackground('#FFFFFF'); // White for odd rows
  }
}

function setupStatusDropdown(sheet) {
  // Define status options with clear progression
  const statusOptions = [
    'New',
    'Contacted',
    'Interested',
    'Invited',
    'Active',
    'Not Interested',
    'Declined'
  ];

  // Create dropdown rule for Status column (column 5)
  const statusRule = SpreadsheetApp.newDataValidation()
    .requireValueInList(statusOptions, true)
    .setAllowInvalid(false)
    .setHelpText('Select signup status from dropdown')
    .build();

  // Apply to entire Status column (starting from row 2, excluding header)
  const statusRange = sheet.getRange(2, 5, sheet.getMaxRows() - 1, 1);
  statusRange.setDataValidation(statusRule);
}

function setupConditionalFormatting(sheet) {
  // Color coding for different statuses
  const rules = [];

  // NEW - Light Orange
  rules.push(SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo('New')
    .setBackground('#FFE4B5')
    .setFontColor('#8B4513')
    .setRanges([sheet.getRange('E2:E1000')])
    .build());

  // CONTACTED - Light Blue
  rules.push(SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo('Contacted')
    .setBackground('#E3F2FD')
    .setFontColor('#1565C0')
    .setRanges([sheet.getRange('E2:E1000')])
    .build());

  // INTERESTED - Light Purple
  rules.push(SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo('Interested')
    .setBackground('#F3E5F5')
    .setFontColor('#7B1FA2')
    .setRanges([sheet.getRange('E2:E1000')])
    .build());

  // INVITED - Light Green
  rules.push(SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo('Invited')
    .setBackground('#E8F5E9')
    .setFontColor('#2E7D32')
    .setRanges([sheet.getRange('E2:E1000')])
    .build());

  // ACTIVE - Green (success)
  rules.push(SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo('Active')
    .setBackground('#7FB069')
    .setFontColor('#FFFFFF')
    .setBold(true)
    .setRanges([sheet.getRange('E2:E1000')])
    .build());

  // NOT INTERESTED - Light Gray
  rules.push(SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo('Not Interested')
    .setBackground('#F5F5F5')
    .setFontColor('#757575')
    .setRanges([sheet.getRange('E2:E1000')])
    .build());

  // DECLINED - Light Red
  rules.push(SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo('Declined')
    .setBackground('#FFEBEE')
    .setFontColor('#C62828')
    .setRanges([sheet.getRange('E2:E1000')])
    .build());

  sheet.setConditionalFormatRules(rules);
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

          <p>Think Hinge, but for AI people—a fun social app where you can meet AI people, watch videos together, and actually hang out.</p>

          <p>We're working on private alpha right now.</p>

          <p>We'll email you when it's ready for you to try.</p>

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

Think Hinge, but for AI people—a fun social app where you can meet AI people, watch videos together, and actually hang out.

We're working on private alpha right now.

We'll email you when it's ready for you to try.

In the meantime, want to chat about AI people and the future of social fabric?
Book a call: https://calendar.app.google/BGZUoEL4aDvgBvr77

— Vedanth Nath
Founder, Personhood

---
Personhood · Building for AI People
cady.social · @VedanthNath (https://x.com/VedanthNath)
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
            <td>${Utilities.formatDate(timestamp, Session.getScriptTimeZone(), DATE_FORMAT)}</td>
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
Timestamp: ${Utilities.formatDate(timestamp, Session.getScriptTimeZone(), DATE_FORMAT)}

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

/**
 * SETUP FUNCTION - Run this first!
 * Creates and formats the waitlist spreadsheet
 * Select this function from dropdown and click "Run"
 */
function setupSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);

  // Delete sheet if it already exists (fresh start)
  if (sheet) {
    Logger.log('⚠️ Sheet "' + SHEET_NAME + '" already exists. Deleting for fresh setup...');
    ss.deleteSheet(sheet);
  }

  // Create new sheet
  sheet = ss.insertSheet(SHEET_NAME);
  Logger.log('✅ Created sheet: ' + SHEET_NAME);

  // Setup headers
  sheet.appendRow(['#', 'Timestamp', 'Name', 'Email', 'Status', 'Notes']);
  Logger.log('✅ Added headers');

  // Format header row - Beautiful Personhood style
  const headerRange = sheet.getRange(1, 1, 1, 6);
  headerRange.setFontWeight('bold');
  headerRange.setBackground('#F6C28B'); // Warm peach
  headerRange.setFontColor('#3E3B28'); // Dark brown
  headerRange.setFontSize(11);
  headerRange.setVerticalAlignment('middle');
  headerRange.setHorizontalAlignment('center');

  // Add borders to header
  headerRange.setBorder(true, true, true, true, true, true, '#3E3B28', SpreadsheetApp.BorderStyle.SOLID_MEDIUM);
  Logger.log('✅ Formatted headers');

  // Set column widths for better readability
  sheet.setColumnWidth(1, 50);   // Serial number - narrow
  sheet.setColumnWidth(2, 180);  // Timestamp - wider
  sheet.setColumnWidth(3, 150);  // Name
  sheet.setColumnWidth(4, 250);  // Email - widest
  sheet.setColumnWidth(5, 120);  // Status
  sheet.setColumnWidth(6, 300);  // Notes - wide for comments
  Logger.log('✅ Set column widths');

  // Freeze header row
  sheet.setFrozenRows(1);
  Logger.log('✅ Froze header row');

  // Setup Status dropdown with validation
  setupStatusDropdown(sheet);
  Logger.log('✅ Added status dropdown');

  // Add conditional formatting for status colors
  setupConditionalFormatting(sheet);
  Logger.log('✅ Added color coding');

  // Add sample row to show formatting
  const sampleTimestamp = new Date();
  sheet.appendRow([
    1,
    Utilities.formatDate(sampleTimestamp, Session.getScriptTimeZone(), DATE_FORMAT),
    'Sample User',
    'sample@example.com',
    'New',
    'This is a test row - feel free to delete!'
  ]);

  // Format sample row
  const sampleRange = sheet.getRange(2, 1, 1, 6);
  sampleRange.setFontSize(10);
  sampleRange.setVerticalAlignment('middle');
  sampleRange.setBorder(true, true, true, true, true, true, '#E8E8E8', SpreadsheetApp.BorderStyle.SOLID);

  // Center align serial, timestamp, status
  sheet.getRange(2, 1).setHorizontalAlignment('center');
  sheet.getRange(2, 2).setHorizontalAlignment('center');
  sheet.getRange(2, 5).setHorizontalAlignment('center');

  // Left align name, email, notes
  sheet.getRange(2, 3).setHorizontalAlignment('left');
  sheet.getRange(2, 4).setHorizontalAlignment('left');
  sheet.getRange(2, 6).setHorizontalAlignment('left');

  sampleRange.setBackground('#FFFFFF');
  Logger.log('✅ Added sample row');

  Logger.log('');
  Logger.log('🎉 SETUP COMPLETE!');
  Logger.log('📊 Your beautiful waitlist spreadsheet is ready!');
  Logger.log('');
  Logger.log('Next steps:');
  Logger.log('1. Delete the sample row if you want');
  Logger.log('2. Run testEmails() to test email notifications');
  Logger.log('3. Deploy as Web App');
  Logger.log('');

  // Show success message
  SpreadsheetApp.getUi().alert(
    '✅ Setup Complete!',
    'Your beautiful waitlist spreadsheet is ready!\n\n' +
    'Features added:\n' +
    '✓ Serial numbers\n' +
    '✓ Beautiful formatting\n' +
    '✓ Status dropdown (7 options)\n' +
    '✓ Color coding\n' +
    '✓ Frozen headers\n' +
    '✓ DD/MM/YY date format\n\n' +
    'Next: Run testEmails() to test notifications!',
    SpreadsheetApp.getUi().ButtonSet.OK
  );
}

/**
 * TEST FUNCTION - Run this to verify email setup
 * Sends test emails to ved@loocafe.com
 * Select this function from dropdown and click "Run"
 */
function testEmails() {
  Logger.log('📧 Sending test emails...');

  sendUserConfirmation('ved@loocafe.com', 'Vedanth Nath');
  Logger.log('✅ Sent user confirmation email to ved@loocafe.com');

  sendAdminNotification('test@example.com', 'Test User', new Date());
  Logger.log('✅ Sent admin notification email to ved@loocafe.com');

  Logger.log('');
  Logger.log('🎉 Test emails sent successfully!');
  Logger.log('📬 Check your inbox: ved@loocafe.com');
  Logger.log('');

  // Show success message
  SpreadsheetApp.getUi().alert(
    '✅ Test Emails Sent!',
    'Check your inbox at ved@loocafe.com\n\n' +
    'You should receive:\n' +
    '1. User confirmation email (beautiful welcome)\n' +
    '2. Admin notification email (signup alert)\n\n' +
    'Next: Deploy as Web App!',
    SpreadsheetApp.getUi().ButtonSet.OK
  );
}

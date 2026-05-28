/**
 * teamEmail.js
 * Internal notification email sent to the JOS Webworks team
 * whenever a new contact form submission is received.
 */

/**
 * @param {object} data
 * @param {string} data.name
 * @param {string} data.email
 * @param {string} data.phone
 * @param {string} data.service
 * @param {string} data.message
 * @param {string} data.submittedAt  ISO timestamp
 * @returns {{ subject: string, html: string }}
 */
function teamEmailTemplate({ name, email, phone, service, message, submittedAt }) {
  const year = new Date().getFullYear();
  const formattedDate = new Date(submittedAt).toLocaleString("en-IN", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  });

  const rows = [
    ["Full Name",  name],
    ["Email",      `<a href="mailto:${email}" style="color:#00C2CB;text-decoration:none;font-weight:600;">${email}</a>`],
    ["Phone",      phone ? `<a href="tel:${phone}" style="color:#00C2CB;text-decoration:none;font-weight:600;">${phone}</a>` : `<span style="color:#475569;">—</span>`],
    ["Service",    service || "General Inquiry"],
    ["Submitted",  formattedDate],
  ];

  return {
    subject: `🔔 New Lead: ${name} — ${service || "General Inquiry"} | JOS Webworks`,
    html: /* html */ `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Lead — JOS Webworks</title>
</head>
<body style="margin:0;padding:0;background:#060b14;font-family:'Segoe UI',Arial,sans-serif;-webkit-font-smoothing:antialiased;">

  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#060b14;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;">

          <!-- ── Alert Banner ── -->
          <tr>
            <td style="background:linear-gradient(90deg,#0073CF,#00C2CB);border-radius:12px 12px 0 0;padding:6px 28px;">
              <p style="margin:0;font-size:11px;font-weight:700;color:#ffffff;text-transform:uppercase;letter-spacing:2px;">
                🔔 &nbsp; New Inbound Lead &nbsp; — &nbsp; Action Required
              </p>
            </td>
          </tr>

          <!-- ── Header ── -->
          <tr>
            <td style="background:#0d1525;padding:36px 40px 28px;border-left:1px solid rgba(0,194,203,0.12);border-right:1px solid rgba(0,194,203,0.12);">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <span style="font-size:22px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;">JOS</span>
                    <span style="font-size:22px;font-weight:300;color:rgba(255,255,255,0.7);"> Webworks</span>
                    <span style="display:block;font-size:12px;font-weight:600;color:#00C2CB;text-transform:uppercase;letter-spacing:1.5px;margin-top:2px;">
                      Internal Lead Notification
                    </span>
                  </td>
                  <td align="right">
                    <div style="background:rgba(0,194,203,0.1);border:1px solid rgba(0,194,203,0.3);border-radius:8px;padding:8px 16px;display:inline-block;">
                      <span style="font-size:12px;font-weight:700;color:#00C2CB;">NEW LEAD</span>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ── Lead Details Card ── -->
          <tr>
            <td style="background:#0d1525;padding:0 40px 32px;border-left:1px solid rgba(0,194,203,0.12);border-right:1px solid rgba(0,194,203,0.12);">
              <table width="100%" cellpadding="0" cellspacing="0" border="0"
                style="background:#111e30;border:1px solid rgba(0,194,203,0.18);border-radius:12px;overflow:hidden;">
                <tr>
                  <td style="background:linear-gradient(90deg,rgba(0,115,207,0.2),rgba(0,194,203,0.1));padding:14px 24px;border-bottom:1px solid rgba(0,194,203,0.12);">
                    <p style="margin:0;font-size:11px;font-weight:700;color:#00C2CB;text-transform:uppercase;letter-spacing:1.5px;">
                      Contact Details
                    </p>
                  </td>
                </tr>
                ${rows
                  .map(
                    ([label, value], i) => `
                <tr style="background:${i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.02)"};">
                  <td width="140" style="padding:14px 24px;font-size:12px;font-weight:700;color:#475569;text-transform:uppercase;letter-spacing:0.8px;border-right:1px solid rgba(255,255,255,0.04);vertical-align:top;">
                    ${label}
                  </td>
                  <td style="padding:14px 24px;font-size:14px;color:#cbd5e1;line-height:1.5;">
                    ${value}
                  </td>
                </tr>`
                  )
                  .join("")}
              </table>
            </td>
          </tr>

          <!-- ── Message ── -->
          <tr>
            <td style="background:#0d1525;padding:0 40px 32px;border-left:1px solid rgba(0,194,203,0.12);border-right:1px solid rgba(0,194,203,0.12);">
              <p style="margin:0 0 12px;font-size:11px;font-weight:700;color:#475569;text-transform:uppercase;letter-spacing:1.5px;">
                Message from Client
              </p>
              <div style="background:#111e30;border:1px solid rgba(255,255,255,0.06);border-left:3px solid #0073CF;border-radius:8px;padding:20px 24px;">
                <p style="margin:0;font-size:14px;color:#94a3b8;line-height:1.8;white-space:pre-wrap;">${message}</p>
              </div>
            </td>
          </tr>

          <!-- ── Quick Actions ── -->
          <tr>
            <td style="background:#0d1525;padding:0 40px 36px;border-left:1px solid rgba(0,194,203,0.12);border-right:1px solid rgba(0,194,203,0.12);">
              <p style="margin:0 0 14px;font-size:11px;font-weight:700;color:#475569;text-transform:uppercase;letter-spacing:1.5px;">
                Quick Actions
              </p>
              <table cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding-right:10px;">
                    <a href="mailto:${email}" target="_blank"
                      style="display:inline-block;padding:11px 22px;border-radius:8px;
                             background:linear-gradient(135deg,#0073CF,#00C2CB);
                             color:#ffffff;font-size:13px;font-weight:700;text-decoration:none;letter-spacing:0.3px;">
                      Reply to Client
                    </a>
                  </td>
                  ${phone ? `
                  <td style="padding-right:10px;">
                    <a href="https://wa.me/${phone.replace(/\D/g, "")}" target="_blank"
                      style="display:inline-block;padding:11px 22px;border-radius:8px;
                             background:rgba(34,197,94,0.12);border:1px solid rgba(34,197,94,0.3);
                             color:#4ade80;font-size:13px;font-weight:700;text-decoration:none;">
                      WhatsApp
                    </a>
                  </td>` : ""}
                </tr>
              </table>
            </td>
          </tr>

          <!-- ── Footer ── -->
          <tr>
            <td style="background:#060b14;border-radius:0 0 12px 12px;padding:20px 40px;
                       border:1px solid rgba(0,194,203,0.08);border-top:1px solid rgba(0,194,203,0.12);text-align:center;">
              <p style="margin:0 0 4px;font-size:12px;color:#334155;">
                This is an automated notification from the JOS Webworks contact system.
              </p>
              <p style="margin:0;font-size:11px;color:#1e293b;">
                &copy; ${year} JOS Webworks &mdash; Jayesh, Om &amp; Shivam
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>
    `.trim(),
  };
}

module.exports = teamEmailTemplate;

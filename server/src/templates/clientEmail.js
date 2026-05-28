/**
 * clientEmail.js
 * Beautiful confirmation email sent to the client after they submit a query.
 */

/**
 * @param {object} data
 * @param {string} data.name
 * @param {string} data.email
 * @param {string} data.service
 * @param {string} data.message
 * @returns {{ subject: string, html: string }}
 */
function clientEmailTemplate({ name, service, message }) {
  const year = new Date().getFullYear();

  return {
    subject: `We've received your message, ${name.split(" ")[0]}! — JOS Webworks`,
    html: /* html */ `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Thank You — JOS Webworks</title>
</head>
<body style="margin:0;padding:0;background:#0a0e1a;font-family:'Segoe UI',Arial,sans-serif;-webkit-font-smoothing:antialiased;">

  <!-- Wrapper -->
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#0a0e1a;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;">

          <!-- ── Header ── -->
          <tr>
            <td style="background:linear-gradient(135deg,#0050A0 0%,#0073CF 50%,#00C2CB 100%);border-radius:16px 16px 0 0;padding:48px 40px 40px;text-align:center;">
              <!-- Logo text -->
              <div style="display:inline-block;margin-bottom:24px;">
                <span style="font-size:28px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;">JOS</span>
                <span style="font-size:28px;font-weight:300;color:rgba(255,255,255,0.85);letter-spacing:-0.5px;"> Webworks</span>
              </div>
              <div style="width:48px;height:3px;background:rgba(255,255,255,0.4);border-radius:2px;margin:0 auto 28px;"></div>
              <h1 style="margin:0;font-size:26px;font-weight:700;color:#ffffff;line-height:1.3;">
                We&apos;ve got your message! 🎉
              </h1>
              <p style="margin:12px 0 0;font-size:15px;color:rgba(255,255,255,0.80);line-height:1.6;">
                Thanks for reaching out, <strong style="color:#ffffff;">${name.split(" ")[0]}</strong>. 
                We&apos;ll get back to you within <strong style="color:#ffffff;">24&ndash;48 hours</strong>.
              </p>
            </td>
          </tr>

          <!-- ── Body ── -->
          <tr>
            <td style="background:#111827;padding:40px;border-left:1px solid rgba(255,255,255,0.06);border-right:1px solid rgba(255,255,255,0.06);">

              <!-- Greeting -->
              <p style="margin:0 0 24px;font-size:15px;color:#cbd5e1;line-height:1.7;">
                Hi <strong style="color:#f1f5f9;">${name}</strong>,<br /><br />
                Thank you for choosing <strong style="color:#00C2CB;">JOS Webworks</strong>. Your query has been received 
                and our team is already reviewing it. We&apos;re excited to learn more about your project and explore 
                how we can help you grow online.
              </p>

              <!-- Summary card -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0"
                style="background:#1e2a3a;border:1px solid rgba(0,194,203,0.15);border-radius:12px;margin-bottom:28px;">
                <tr>
                  <td style="padding:24px 28px;">
                    <p style="margin:0 0 16px;font-size:11px;font-weight:700;color:#00C2CB;text-transform:uppercase;letter-spacing:1.5px;">
                      Your Submission Summary
                    </p>
                    <!-- Name -->
                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:12px;">
                      <tr>
                        <td width="110" style="font-size:13px;color:#64748b;font-weight:600;padding-bottom:2px;">Name</td>
                        <td style="font-size:13px;color:#f1f5f9;font-weight:500;">${name}</td>
                      </tr>
                    </table>
                    <!-- Service -->
                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:12px;">
                      <tr>
                        <td width="110" style="font-size:13px;color:#64748b;font-weight:600;padding-bottom:2px;">Service</td>
                        <td>
                          <span style="display:inline-block;background:rgba(0,115,207,0.15);border:1px solid rgba(0,115,207,0.3);color:#60a5fa;font-size:12px;font-weight:600;padding:2px 10px;border-radius:20px;">
                            ${service || "General Inquiry"}
                          </span>
                        </td>
                      </tr>
                    </table>
                    <!-- Message -->
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td width="110" style="font-size:13px;color:#64748b;font-weight:600;vertical-align:top;padding-top:2px;">Message</td>
                        <td style="font-size:13px;color:#94a3b8;line-height:1.6;">${message}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- What's next -->
              <p style="margin:0 0 16px;font-size:13px;font-weight:700;color:#f1f5f9;text-transform:uppercase;letter-spacing:1px;">
                What happens next?
              </p>

              <!-- Steps -->
              ${[
                ["01", "#0073CF", "Review", "Our team carefully reads every query and evaluates your requirements."],
                ["02", "#00C2CB", "Connect", "We'll reach out via email or WhatsApp to schedule a discovery call."],
                ["03", "#818cf8", "Propose", "We share a tailored plan, timeline, and transparent pricing."],
              ]
                .map(
                  ([num, color, title, desc]) => `
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:14px;">
                <tr>
                  <td width="44" valign="top" style="padding-top:2px;">
                    <div style="width:36px;height:36px;border-radius:50%;background:${color}20;border:1px solid ${color}40;
                                text-align:center;line-height:36px;font-size:12px;font-weight:700;color:${color};">
                      ${num}
                    </div>
                  </td>
                  <td style="padding-left:4px;">
                    <p style="margin:0;font-size:14px;font-weight:600;color:#f1f5f9;">${title}</p>
                    <p style="margin:2px 0 0;font-size:13px;color:#64748b;line-height:1.5;">${desc}</p>
                  </td>
                </tr>
              </table>`
                )
                .join("")}

              <!-- Divider -->
              <div style="height:1px;background:rgba(255,255,255,0.06);margin:28px 0;"></div>

              <!-- CTA -->
              <p style="margin:0 0 20px;font-size:14px;color:#94a3b8;line-height:1.6;">
                In the meantime, feel free to explore our work or follow us on social media for updates, tips, and digital marketing insights:
              </p>
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="center">
                    <a href="https://instagram.com/joswebworks" target="_blank"
                      style="display:inline-block;margin:0 6px;padding:10px 20px;border-radius:8px;
                             background:rgba(236,72,153,0.1);border:1px solid rgba(236,72,153,0.3);
                             color:#f472b6;font-size:13px;font-weight:600;text-decoration:none;">
                      Instagram
                    </a>
                    <a href="https://linkedin.com" target="_blank"
                      style="display:inline-block;margin:0 6px;padding:10px 20px;border-radius:8px;
                             background:rgba(0,115,207,0.1);border:1px solid rgba(0,115,207,0.3);
                             color:#60a5fa;font-size:13px;font-weight:600;text-decoration:none;">
                      LinkedIn
                    </a>
                    <a href="https://wa.me/919119446550" target="_blank"
                      style="display:inline-block;margin:0 6px;padding:10px 20px;border-radius:8px;
                             background:rgba(34,197,94,0.1);border:1px solid rgba(34,197,94,0.3);
                             color:#4ade80;font-size:13px;font-weight:600;text-decoration:none;">
                      WhatsApp
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- ── Footer ── -->
          <tr>
            <td style="background:#0d1117;border-radius:0 0 16px 16px;padding:28px 40px;
                       border:1px solid rgba(255,255,255,0.06);border-top:none;text-align:center;">
              <p style="margin:0 0 6px;font-size:13px;color:#475569;">
                Questions? Reach us at
                <a href="mailto:joswebworks@gmail.com" style="color:#00C2CB;text-decoration:none;font-weight:600;">
                  joswebworks@gmail.com
                </a>
                &nbsp;or call
                <a href="tel:+919119446550" style="color:#00C2CB;text-decoration:none;font-weight:600;">
                  +91 9119446550
                </a>
              </p>
              <p style="margin:0;font-size:12px;color:#334155;">
                &copy; ${year} JOS Webworks. All rights reserved.<br />
                <span style="color:#1e293b;">Built with passion by Jayesh, Om &amp; Shivam</span>
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

module.exports = clientEmailTemplate;

/**
 * mailer.js
 * Shared Nodemailer transporter — initialised once, reused everywhere.
 */

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_APP_PASS,
  },
});

/**
 * Verify SMTP connection on startup.
 */
async function verifyMailer() {
  await transporter.verify();
  console.log("✅  Mailer connected — SMTP ready");
}

/**
 * Send a single email.
 *
 * @param {import("nodemailer").SendMailOptions} options
 * @returns {Promise<import("nodemailer").SentMessageInfo>}
 */
async function sendMail(options) {
  return transporter.sendMail({
    from: `"JOS Webworks" <${process.env.MAIL_USER}>`,
    ...options,
  });
}

module.exports = { verifyMailer, sendMail };

/**
 * contact.js — /api/contact route
 *
 * POST /api/contact
 * Body: { name, email, phone?, service?, message }
 *
 * Sends:
 *  1. A branded confirmation email to the client
 *  2. A lead-notification email to the JOS Webworks team inbox
 */

const express = require("express");
const { body, validationResult } = require("express-validator");
const { sendMail } = require("../lib/mailer");
const clientEmailTemplate = require("../templates/clientEmail");
const teamEmailTemplate = require("../templates/teamEmail");

const router = express.Router();

/* ── Validation rules ─────────────────────────────────────── */
const contactValidators = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required.")
    .isLength({ min: 2, max: 80 })
    .withMessage("Name must be between 2 and 80 characters."),

  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required.")
    .isEmail()
    .withMessage("Please provide a valid email address.")
    .normalizeEmail(),

  body("phone")
    .optional({ checkFalsy: true })
    .trim()
    .matches(/^[\d\s\+\-\(\)]{7,15}$/)
    .withMessage("Phone number format is invalid."),

  body("service")
    .optional({ checkFalsy: true })
    .trim()
    .isLength({ max: 100 })
    .withMessage("Service field is too long."),

  body("message")
    .trim()
    .notEmpty()
    .withMessage("Message is required.")
    .isLength({ min: 10, max: 2000 })
    .withMessage("Message must be between 10 and 2000 characters."),
];

/* ── POST /api/contact ─────────────────────────────────────── */
router.post("/", contactValidators, async (req, res) => {
  /* 1. Validate input */
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      success: false,
      message: "Validation failed. Please check your input.",
      errors: errors.array().map((e) => ({ field: e.path, message: e.msg })),
    });
  }

  const { name, email, phone = "", service = "General Inquiry", message } = req.body;
  const submittedAt = new Date().toISOString();

  try {
    /* 2. Build both email payloads */
    const clientPayload = clientEmailTemplate({ name, email, phone, service, message });
    const teamPayload = teamEmailTemplate({ name, email, phone, service, message, submittedAt });

    /* 3. Send emails concurrently */
    await Promise.all([
      /* → Confirmation to client */
      sendMail({
        to: email,
        subject: clientPayload.subject,
        html: clientPayload.html,
      }),

      /* → Lead notification to team */
      sendMail({
        to: process.env.TEAM_EMAIL,
        replyTo: email,
        subject: teamPayload.subject,
        html: teamPayload.html,
      }),
    ]);

    console.log(`📨  Contact form submitted | ${name} <${email}> | Service: ${service} | ${submittedAt}`);

    return res.status(200).json({
      success: true,
      message: `Thank you, ${name.split(" ")[0]}! Your message has been received. We'll be in touch within 24–48 hours.`,
    });
  } catch (err) {
    console.error("❌  Mail send error:", err.message);

    return res.status(500).json({
      success: false,
      message: "Something went wrong while sending your message. Please try again or contact us directly at joswebworks@gmail.com.",
    });
  }
});

module.exports = router;

/**
 * index.js — JOS Webworks Email Backend
 * Express server entry point
 */

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const { verifyMailer } = require("./lib/mailer");
const contactRouter = require("./routes/contact");

const app = express();
const PORT = process.env.PORT || 5000;

/* ── CORS ───────────────────────────────────────────────────── */
const allowedOrigins = (process.env.ALLOWED_ORIGINS || "")
  .split(",")
  .map((o) => o.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (e.g. Postman, server-to-server)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      callback(new Error(`CORS: Origin "${origin}" is not allowed.`));
    },
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

/* ── Body parsing ───────────────────────────────────────────── */
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

/* ── Global rate limiter (100 req / 15 min per IP) ──────────── */
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
    message: {
      success: false,
      message: "Too many requests from this IP. Please try again later.",
    },
  })
);

/* ── Contact form limiter (5 submissions / hour per IP) ─────── */
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  message: {
    success: false,
    message: "Too many form submissions. Please wait before trying again.",
  },
});

/* ── Routes ─────────────────────────────────────────────────── */
app.get("/", (_req, res) => {
  res.json({
    service: "JOS Webworks Email API",
    version: "1.0.0",
    status: "running",
    endpoints: {
      contact: "POST /api/contact",
      health:  "GET  /api/health",
    },
  });
});

app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

app.use("/api/contact", contactLimiter, contactRouter);

/* ── 404 handler ────────────────────────────────────────────── */
app.use((_req, res) => {
  res.status(404).json({ success: false, message: "Route not found." });
});

/* ── Global error handler ───────────────────────────────────── */
app.use((err, _req, res, _next) => {
  console.error("❌  Unhandled error:", err.message);
  res.status(500).json({ success: false, message: "Internal server error." });
});

/* ── Start ──────────────────────────────────────────────────── */
async function start() {
  try {
    await verifyMailer();
    app.listen(PORT, () => {
      console.log("");
      console.log("  ╔════════════════════════════════════════╗");
      console.log("  ║     JOS Webworks — Email API Server    ║");
      console.log("  ╠════════════════════════════════════════╣");
      console.log(`  ║  🚀  Listening on  http://localhost:${PORT} ║`);
      console.log(`  ║  📧  Mailer        ${process.env.MAIL_USER}  ║`);
      console.log("  ╚════════════════════════════════════════╝");
      console.log("");
    });
  } catch (err) {
    console.error("❌  Failed to start server:", err.message);
    process.exit(1);
  }
}

start();

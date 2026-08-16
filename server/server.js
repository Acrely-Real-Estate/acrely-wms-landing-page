import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ============================================================
// EMAIL DESTINATION
// ============================================================
// Form submissions will ALWAYS be sent to this email.
const MAIL_TO = "business.noodlefuel@gmail.com";

// ============================================================
// CORS
// ============================================================

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://127.0.0.1:5173",
      "https://wms-landing-page.vercel.app"
    ],
    
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json({ limit: "1mb" }));

// ============================================================
// SMTP CONFIGURATION
// ============================================================

console.log("");
console.log("======================================");
console.log("LOADING SMTP CONFIGURATION");
console.log("======================================");

console.log("SMTP_HOST:", process.env.SMTP_HOST);
console.log("SMTP_PORT:", process.env.SMTP_PORT);
console.log("SMTP_SECURE:", process.env.SMTP_SECURE);
console.log("SMTP_USER:", process.env.SMTP_USER);
console.log(
  "SMTP_PASS:",
  process.env.SMTP_PASS ? "********" : "MISSING"
);
console.log("MAIL_TO:", MAIL_TO);

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === "true",

  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// ============================================================
// SMTP CONNECTION TEST
// ============================================================

transporter.verify((error) => {
  if (error) {
    console.error("");
    console.error("======================================");
    console.error("SMTP CONNECTION FAILED");
    console.error("======================================");
    console.error(error);
    console.error("======================================");
    console.error("");
  } else {
    console.log("");
    console.log("======================================");
    console.log("SMTP SERVER IS READY");
    console.log("======================================");
    console.log("");
  }
});

// ============================================================
// HEALTH CHECK
// ============================================================

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Acrely WMS email server is running.",
  });
});

// ============================================================
// BOOK DEMO
// ============================================================

app.post("/api/book-demo", async (req, res) => {
  console.log("");
  console.log("======================================");
  console.log("NEW BOOK DEMO REQUEST");
  console.log("======================================");

  try {
    const formData = req.body;

    console.log("Company:", formData.companyName);
    console.log("Contact:", formData.contactPerson);
    console.log("Email:", formData.businessEmail);

    // ========================================================
    // VALIDATION
    // ========================================================

    if (!formData.companyName?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Company name is required.",
      });
    }

    if (!formData.contactPerson?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Contact person is required.",
      });
    }

    if (!formData.jobTitle?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Job title is required.",
      });
    }

    if (!formData.businessEmail?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Business email is required.",
      });
    }

    if (!formData.mobileNumber?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Mobile number is required.",
      });
    }

    if (!formData.industry) {
      return res.status(400).json({
        success: false,
        message: "Industry is required.",
      });
    }

    if (!formData.companySize) {
      return res.status(400).json({
        success: false,
        message: "Company size is required.",
      });
    }

    if (!formData.numberOfWarehouses?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Number of warehouses is required.",
      });
    }

    if (!formData.totalWarehouseArea?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Total warehouse area is required.",
      });
    }

    if (!formData.country?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Country is required.",
      });
    }

    // ========================================================
    // REQUIREMENTS
    // ========================================================

    const selectedRequirements =
      Array.isArray(formData.requirements) &&
      formData.requirements.length > 0
        ? formData.requirements.join(", ")
        : "None selected";

    // ========================================================
    // EMAIL OPTIONS
    // ========================================================

    const mailOptions = {
      // Email account that authenticates with SMTP
      from: `"Acrely WMS Website" <${process.env.SMTP_USER}>`,

      // HARD-CODED DESTINATION
      to: MAIL_TO,

      // When you press Reply, it replies to the person
      // who submitted the form.
      replyTo: formData.businessEmail,

      subject: `New Enterprise Demo Request - ${formData.companyName}`,

      // ======================================================
      // PLAIN TEXT EMAIL
      // ======================================================

      text: `
NEW ACRELY WMS ENTERPRISE DEMO REQUEST

========================================
COMPANY INFORMATION
========================================

Company Name:
${formData.companyName}

Company Website:
${formData.companyWebsite || "Not provided"}

Contact Person:
${formData.contactPerson}

Job Title:
${formData.jobTitle}

Business Email:
${formData.businessEmail}

Mobile Number:
${formData.mobileNumber}


========================================
BUSINESS PROFILE
========================================

Industry:
${formData.industry}

Company Size:
${formData.companySize}

Number of Warehouses:
${formData.numberOfWarehouses}

Total Warehouse Area:
${formData.totalWarehouseArea}

Country:
${formData.country}

State / Region:
${formData.stateRegion || "Not provided"}

City:
${formData.city || "Not provided"}


========================================
WAREHOUSE OPERATIONS
========================================

Current Management:
${formData.currentManagement || "Not provided"}

Average Daily Orders:
${formData.averageDailyOrders || "Not provided"}

Average Daily Receiving:
${formData.averageDailyReceiving || "Not provided"}

Warehouse Employees:
${formData.numberOfWarehouseEmployees || "Not provided"}

Warehouse Users:
${formData.numberOfWarehouseUsers || "Not provided"}


========================================
REQUIREMENTS
========================================

Requested Features:
${selectedRequirements}

Operational Challenges:
${formData.operationalChallenges || "Not provided"}


========================================
IMPLEMENTATION
========================================

Expected Timeline:
${formData.implementationTimeline || "Not provided"}

Additional Requirements:
${formData.additionalRequirements || "Not provided"}


========================================

Submitted through Acrely WMS website.
      `,

      // ======================================================
      // HTML EMAIL
      // ======================================================

      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />

  <style>
    body {
      margin: 0;
      padding: 0;
      background: #f8fafc;
      font-family: Arial, Helvetica, sans-serif;
      color: #0f172a;
    }

    .container {
      max-width: 760px;
      margin: 40px auto;
      background: #ffffff;
      border-radius: 12px;
      overflow: hidden;
      border: 1px solid #e2e8f0;
    }

    .header {
      background: #0f172a;
      color: #ffffff;
      padding: 32px;
    }

    .header h1 {
      margin: 0 0 8px;
      font-size: 24px;
    }

    .header p {
      margin: 0;
      color: #94a3b8;
    }

    .content {
      padding: 32px;
    }

    .section {
      margin-bottom: 30px;
    }

    .section-title {
      color: #1e40af;
      font-size: 13px;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 1px;
      border-bottom: 1px solid #e2e8f0;
      padding-bottom: 10px;
      margin-bottom: 18px;
    }

    .row {
      margin-bottom: 12px;
      line-height: 1.5;
    }

    .label {
      font-weight: bold;
      color: #475569;
    }

    .value {
      color: #0f172a;
    }

    .footer {
      padding: 24px 32px;
      background: #f8fafc;
      border-top: 1px solid #e2e8f0;
      color: #64748b;
      font-size: 13px;
    }
  </style>
</head>

<body>

  <div class="container">

    <div class="header">
      <h1>New Acrely WMS Enterprise Demo Request</h1>

      <p>
        New enquiry submitted through the Acrely WMS website.
      </p>
    </div>

    <div class="content">

      <!-- COMPANY INFORMATION -->

      <div class="section">

        <div class="section-title">
          Company Information
        </div>

        <div class="row">
          <span class="label">Company:</span>
          <span class="value">
            ${formData.companyName}
          </span>
        </div>

        <div class="row">
          <span class="label">Website:</span>
          <span class="value">
            ${formData.companyWebsite || "Not provided"}
          </span>
        </div>

        <div class="row">
          <span class="label">Contact Person:</span>
          <span class="value">
            ${formData.contactPerson}
          </span>
        </div>

        <div class="row">
          <span class="label">Job Title:</span>
          <span class="value">
            ${formData.jobTitle}
          </span>
        </div>

        <div class="row">
          <span class="label">Business Email:</span>
          <span class="value">
            ${formData.businessEmail}
          </span>
        </div>

        <div class="row">
          <span class="label">Mobile:</span>
          <span class="value">
            ${formData.mobileNumber}
          </span>
        </div>

      </div>

      <!-- BUSINESS PROFILE -->

      <div class="section">

        <div class="section-title">
          Business Profile
        </div>

        <div class="row">
          <span class="label">Industry:</span>
          <span class="value">
            ${formData.industry}
          </span>
        </div>

        <div class="row">
          <span class="label">Company Size:</span>
          <span class="value">
            ${formData.companySize}
          </span>
        </div>

        <div class="row">
          <span class="label">Warehouses:</span>
          <span class="value">
            ${formData.numberOfWarehouses}
          </span>
        </div>

        <div class="row">
          <span class="label">Warehouse Area:</span>
          <span class="value">
            ${formData.totalWarehouseArea}
          </span>
        </div>

        <div class="row">
          <span class="label">Country:</span>
          <span class="value">
            ${formData.country}
          </span>
        </div>

        <div class="row">
          <span class="label">State / Region:</span>
          <span class="value">
            ${formData.stateRegion || "Not provided"}
          </span>
        </div>

        <div class="row">
          <span class="label">City:</span>
          <span class="value">
            ${formData.city || "Not provided"}
          </span>
        </div>

      </div>

      <!-- WAREHOUSE OPERATIONS -->

      <div class="section">

        <div class="section-title">
          Warehouse Operations
        </div>

        <div class="row">
          <span class="label">Current Management:</span>
          <span class="value">
            ${formData.currentManagement || "Not provided"}
          </span>
        </div>

        <div class="row">
          <span class="label">Average Daily Orders:</span>
          <span class="value">
            ${formData.averageDailyOrders || "Not provided"}
          </span>
        </div>

        <div class="row">
          <span class="label">Average Daily Receiving:</span>
          <span class="value">
            ${formData.averageDailyReceiving || "Not provided"}
          </span>
        </div>

        <div class="row">
          <span class="label">Warehouse Employees:</span>
          <span class="value">
            ${formData.numberOfWarehouseEmployees || "Not provided"}
          </span>
        </div>

        <div class="row">
          <span class="label">Warehouse Users:</span>
          <span class="value">
            ${formData.numberOfWarehouseUsers || "Not provided"}
          </span>
        </div>

      </div>

      <!-- REQUIREMENTS -->

      <div class="section">

        <div class="section-title">
          Requirements
        </div>

        <div class="row">
          <span class="label">Requested Features:</span>
          <span class="value">
            ${selectedRequirements}
          </span>
        </div>

        <div class="row">
          <span class="label">Operational Challenges:</span>
          <span class="value">
            ${formData.operationalChallenges || "Not provided"}
          </span>
        </div>

      </div>

      <!-- IMPLEMENTATION -->

      <div class="section">

        <div class="section-title">
          Implementation
        </div>

        <div class="row">
          <span class="label">Timeline:</span>
          <span class="value">
            ${formData.implementationTimeline || "Not provided"}
          </span>
        </div>

        <div class="row">
          <span class="label">Additional Requirements:</span>
          <span class="value">
            ${formData.additionalRequirements || "Not provided"}
          </span>
        </div>

      </div>

    </div>

    <div class="footer">
      Submitted through the Acrely WMS website.
    </div>

  </div>

</body>
</html>
      `,
    };

    // ========================================================
    // SEND EMAIL
    // ========================================================

    console.log("");
    console.log("Sending email...");
    console.log("From:", process.env.SMTP_USER);
    console.log("To:", MAIL_TO);
    console.log("Reply-To:", formData.businessEmail);

    const info = await transporter.sendMail(mailOptions);

    console.log("");
    console.log("======================================");
    console.log("EMAIL SENT SUCCESSFULLY");
    console.log("======================================");
    console.log("Message ID:", info.messageId);
    console.log("Response:", info.response);
    console.log("");

    return res.status(200).json({
      success: true,
      message:
        "Your demo request has been submitted successfully.",
    });

  } catch (error) {
    console.error("");
    console.error("======================================");
    console.error("EMAIL SEND FAILED");
    console.error("======================================");
    console.error(error);
    console.error("======================================");
    console.error("");

    return res.status(500).json({
      success: false,
      message: "Email could not be sent.",
    });
  }
});

// ============================================================
// START SERVER
// ============================================================

app.listen(PORT, () => {
  console.log("");
  console.log("======================================");
  console.log("ACRELY WMS EMAIL SERVER");
  console.log("======================================");
  console.log(`Server: http://localhost:${PORT}`);
  console.log(`Email destination: ${MAIL_TO}`);
  console.log("======================================");
});
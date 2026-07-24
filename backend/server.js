import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";
import resumeRoutes from "./routes/resumeRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";

dotenv.config();
console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log(
  "EMAIL_PASS:",
  process.env.EMAIL_PASS ? "Loaded ✅" : "Not Loaded ❌"
);
connectDB();

const app = express();

// Middleware

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Routes

app.use("/api/contact", contactRoutes);
app.use("/api/resume", resumeRoutes);
app.use("/api/projects", projectRoutes);


// Health Check

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Portfolio Backend Running 🚀",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
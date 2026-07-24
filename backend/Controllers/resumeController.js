import path from "path";
import { fileURLToPath } from "url";
import ResumeDownload from "../models/ResumeDownload.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Download Resume
export const downloadResume = async (req, res) => {
  try {
    await ResumeDownload.create({
      ip: req.ip,
      userAgent: req.headers["user-agent"],
    });

    const filePath = path.join(
      __dirname,
      "../uploads/Tanisha_Resume.pdf"
    );

    res.download(filePath);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Download Statistics
export const getResumeStats = async (req, res) => {
  try {
    const totalDownloads = await ResumeDownload.countDocuments();

    res.json({
      success: true,
      totalDownloads,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
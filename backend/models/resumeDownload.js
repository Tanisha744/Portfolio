import mongoose from "mongoose";

const resumeDownloadSchema = new mongoose.Schema(
  {
    ip: {
      type: String,
      default: "",
    },

    userAgent: {
      type: String,
      default: "",
    },

    downloadedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model("ResumeDownload", resumeDownloadSchema);
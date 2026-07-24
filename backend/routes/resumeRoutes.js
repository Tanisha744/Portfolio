import express from "express";

import {
  downloadResume,
  getResumeStats,
} from "../controllers/resumeController.js";

const router = express.Router();

router.get("/download", downloadResume);

router.get("/stats", getResumeStats);

export default router;
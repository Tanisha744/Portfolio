import express from "express";
import { body } from "express-validator";

import {
  submitContact,
  getContacts,
  deleteContact,
} from "../controllers/contactController.js";

const router = express.Router();

router.post(
  "/",
  [
    body("name")
      .trim()
      .notEmpty()
      .withMessage("Name is required"),

    body("email")
      .isEmail()
      .withMessage("Valid email is required"),

    body("subject")
      .trim()
      .notEmpty()
      .withMessage("Subject is required"),

    body("message")
      .trim()
      .isLength({ min: 10 })
      .withMessage("Message should be at least 10 characters"),
  ],
  submitContact
);

router.get("/", getContacts);

router.delete("/:id", deleteContact);

export default router;
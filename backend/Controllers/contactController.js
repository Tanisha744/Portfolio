import Contact from "../models/Contact.js";
import sendEmail from "../utils/sendEmail.js";
import { validationResult } from "express-validator";

// @desc    Submit Contact Form
// @route   POST /api/contact
// @access  Public

export const submitContact = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    const { name, email, subject, message } = req.body;

    const newContact = await Contact.create({
      name,
      email,
      subject,
      message,
    });

    // Send Email Notification
    await sendEmail(newContact);

    res.status(201).json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// @desc    Get All Contact Messages
// @route   GET /api/contact
// @access  Public (for now)

export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: contacts.length,
      contacts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc Delete Contact
// @route DELETE /api/contact/:id

export const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Message not found",
      });
    }

    await contact.deleteOne();

    res.json({
      success: true,
      message: "Message deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
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
      console.log("========== VALIDATION ERROR ==========");
      console.log(req.body);
      console.log(errors.array());

      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    const { name, email, subject, message } = req.body;

    // Save message in MongoDB
    const newContact = await Contact.create({
      name,
      email,
      subject,
      message,
    });

    console.log("✅ Contact saved to MongoDB");

    // Send email
    await sendEmail(newContact);

    console.log("✅ Email sent successfully");

    res.status(201).json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("========== SERVER ERROR ==========");
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Get All Contact Messages
// @route   GET /api/contact
// @access  Public
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });

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

// @desc    Delete Contact Message
// @route   DELETE /api/contact/:id
// @access  Public
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

    res.status(200).json({
      success: true,
      message: "Message deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
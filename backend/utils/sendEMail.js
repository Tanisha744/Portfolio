    import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendEmail = async (contact) => {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,

    subject: `Portfolio Contact - ${contact.subject}`,

    html: `
      <h2>New Contact Form Submission</h2>

      <p><strong>Name:</strong> ${contact.name}</p>

      <p><strong>Email:</strong> ${contact.email}</p>

      <p><strong>Subject:</strong> ${contact.subject}</p>

      <p><strong>Message:</strong></p>

      <p>${contact.message}</p>
    `,
  });
};

export default sendEmail;
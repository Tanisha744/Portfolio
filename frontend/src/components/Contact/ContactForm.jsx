import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

import { sendContactMessage } from "../../api/contactApi";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  console.log("📤 Form Data:", form);

  // Frontend Validation
  if (
    !form.name.trim() ||
    !form.email.trim() ||
    !form.subject.trim() ||
    !form.message.trim()
  ) {
    toast.error("Please fill all fields.");
    return;
  }

  try {
    setLoading(true);

    const response = await sendContactMessage(form);

    console.log("✅ API Response:", response);

    toast.success(response.message);

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

  } catch (error) {
    console.log("========== ERROR ==========");
    console.log("Status:", error.response?.status);
    console.log("Response:", error.response?.data);
    console.log(
      "Formatted:",
      JSON.stringify(error.response?.data, null, 2)
    );

    if (error.response?.data?.errors) {
      console.table(error.response.data.errors);
    }

    toast.error(
      error.response?.data?.errors?.[0]?.msg ||
      error.response?.data?.message ||
      "Something went wrong."
    );
  } finally {
    setLoading(false);
  }
};
  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="
      rounded-3xl
      border
      border-white/10
      bg-white/5
      p-8
      backdrop-blur-xl"
    >
      <div className="grid gap-5">

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="rounded-xl border border-white/10 bg-[#0F172A] px-5 py-4 outline-none focus:border-cyan-400"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          className="rounded-xl border border-white/10 bg-[#0F172A] px-5 py-4 outline-none focus:border-cyan-400"
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          className="rounded-xl border border-white/10 bg-[#0F172A] px-5 py-4 outline-none focus:border-cyan-400"
        />

        <textarea
          rows={6}
          name="message"
          placeholder="Tell me about your project..."
          value={form.message}
          onChange={handleChange}
          className="rounded-xl border border-white/10 bg-[#0F172A] px-5 py-4 outline-none focus:border-cyan-400"
        />

        <button
          type="submit"
          disabled={loading}
          className="
          rounded-xl
          bg-cyan-500
          py-4
          font-semibold
          text-slate-900
          transition-all
          hover:scale-[1.02]
          hover:bg-cyan-400
          disabled:cursor-not-allowed
          disabled:opacity-70"
        >
          {loading ? "Sending..." : "Send Message →"}
        </button>

      </div>
    </motion.form>
  );
};

export default ContactForm;
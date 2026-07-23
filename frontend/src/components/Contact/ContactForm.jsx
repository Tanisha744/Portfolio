import { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);

    // Axios API call comes later
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: .7 }}
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
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
          className="rounded-xl border border-white/10 bg-[#0F172A] px-5 py-4 outline-none focus:border-cyan-400"
        />

        <input
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
          className="rounded-xl border border-white/10 bg-[#0F172A] px-5 py-4 outline-none focus:border-cyan-400"
        />

        <input
          name="subject"
          placeholder="Subject"
          onChange={handleChange}
          className="rounded-xl border border-white/10 bg-[#0F172A] px-5 py-4 outline-none focus:border-cyan-400"
        />

        <textarea
          rows={6}
          name="message"
          placeholder="Tell me about your project..."
          onChange={handleChange}
          className="rounded-xl border border-white/10 bg-[#0F172A] px-5 py-4 outline-none focus:border-cyan-400"
        />

        <button
          className="
          rounded-xl
          bg-cyan-500
          py-4
          font-semibold
          text-slate-900
          transition-all
          hover:scale-[1.02]
          hover:bg-cyan-400"
        >
          Send Message →
        </button>

      </div>
    </motion.form>
  );
};

export default ContactForm;
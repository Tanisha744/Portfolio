import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import SectionHeading from "../common/SectionHeading";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-32"
    >
      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <SectionHeading
          title="Let's Build Something Amazing"
          subtitle="I'm always open to discussing exciting projects, software engineering opportunities, and innovative ideas."
        />

        <div className="mt-20 grid gap-12 lg:grid-cols-2">

          <ContactInfo />

          <ContactForm />

        </div>

      </div>

    </section>
  );
};

export default Contact;
import PrimaryButton from "../Buttons/PrimaryButton";

const FooterTop = () => {
  return (
    <div className="border-b border-white/10 py-20 text-center">

      <h2 className="text-4xl font-bold text-white md:text-5xl">
        Ready to build something amazing?
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-slate-400">
        I'm always excited to work on innovative products,
        scalable software and AI-powered applications.
      </p>

      <div className="mt-10 flex justify-center gap-5">

        <PrimaryButton>
          Let's Talk
        </PrimaryButton>

        <a
          href="/resume.pdf"
          className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-white transition hover:border-cyan-400"
        >
          Resume
        </a>

      </div>

    </div>
  );
};

export default FooterTop;
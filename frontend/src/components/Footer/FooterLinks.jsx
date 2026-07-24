import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const FooterLinks = () => {
  return (
    <div className="grid gap-12 py-16 md:grid-cols-3">

      <div>

        <h3 className="text-3xl font-bold text-white">
          Tanisha
        </h3>

        <p className="mt-3 text-slate-400">
          Software Engineer
          <br />
          Full Stack Developer
        </p>

        <div className="mt-6 flex gap-4">

          <a
            href="https://github.com/Tanisha744"
            target="_blank"
            rel="noreferrer"
            className="text-2xl text-slate-400 transition hover:text-cyan-400"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/tanisha-tech"
            target="_blank"
            rel="noreferrer"
            className="text-2xl text-slate-400 transition hover:text-cyan-400"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:tanisha94.60@gmail.com"
            className="text-2xl text-slate-400 transition hover:text-cyan-400"
          >
            <FaEnvelope />
          </a>

        </div>

      </div>

      <div>

        <h4 className="mb-4 text-lg font-semibold text-white">
          Quick Links
        </h4>

        <ul className="space-y-3 text-slate-400">

          <li><a href="#home">Home</a></li>

          <li><a href="#about">About</a></li>

          <li><a href="#skills">Skills</a></li>

          <li><a href="#experience">Experience</a></li>

          <li><a href="#projects">Projects</a></li>

          <li><a href="#contact">Contact</a></li>

        </ul>

      </div>

      <div>

        <h4 className="mb-4 text-lg font-semibold text-white">
          Tech Stack
        </h4>

        <div className="flex flex-wrap gap-3">

          {[
            "React",
            ".NET",
            "SQL Server",
            "MongoDB",
            "Angular",
            "Java"
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
            >
              {tech}
            </span>
          ))}

        </div>

      </div>

    </div>
  );
};

export default FooterLinks;
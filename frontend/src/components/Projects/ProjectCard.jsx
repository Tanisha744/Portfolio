import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  const hasGitHub = Boolean(project.github);
  const hasLiveDemo = project.title === "Travelopia" && Boolean(project.live);

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
    >
      {/* Image */}

      <div className="relative h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent" />
      </div>

      {/* Content */}

      <div className="p-8">

        <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
          {project.category}
        </span>

        <h3 className="mt-6 text-3xl font-bold">
          {project.title}
        </h3>

        <p className="mt-4 leading-8 text-slate-300">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 px-3 py-2 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-8 flex gap-4">
          {hasGitHub && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/10 px-5 py-3 transition hover:border-cyan-400"
              aria-label={`View ${project.title} on GitHub`}
            >
              <FaGithub />
            </a>
          )}

          {hasLiveDemo && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/10 px-5 py-3 transition hover:border-cyan-400"
              aria-label={`Open ${project.title} live demo`}
            >
              <FaExternalLinkAlt />
            </a>
          )}
        </div>

      </div>
    </motion.div>
  );
};

export default ProjectCard;
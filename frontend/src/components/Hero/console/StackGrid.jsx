import { motion } from "framer-motion";
import { FaReact, FaDatabase } from "react-icons/fa";
import { SiDotnet, SiMongodb } from "react-icons/si";

const techStack = [
  {
    icon: <FaReact />,
    name: "React",
    color: "text-cyan-400",
  },
  {
    icon: <SiDotnet />,
    name: ".NET",
    color: "text-violet-400",
  },
  {
    icon: <FaDatabase />,
    name: "SQL",
    color: "text-blue-400",
  },
  {
    icon: "☁️",
    name: "Azure",
    color: "text-sky-400",
  },
  {
    icon: <SiMongodb />,
    name: "MongoDB",
    color: "text-green-400",
  },
  {
    icon: "🤖",
    name: "AI",
    color: "text-pink-400",
  },
];

const StackGrid = () => {
  return (
    <div>
      <h3 className="mb-4 text-xs font-semibold uppercase tracking-[3px] text-cyan-400">
        Tech Stack
      </h3>

      <div className="grid grid-cols-3 gap-3">
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.35 + index * 0.08,
            }}
            whileHover={{
              scale: 1.05,
              y: -3,
            }}
            className="flex cursor-default flex-col items-center rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-md transition-all hover:border-cyan-400/40"
          >
            <div className={`text-2xl ${tech.color}`}>
              {tech.icon}
            </div>

            <p className="mt-2 text-xs font-medium text-white">
              {tech.name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StackGrid;
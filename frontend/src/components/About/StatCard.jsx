import { motion } from "framer-motion";

const StatCard = ({ number, title }) => {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      className="
      rounded-3xl
      border
      border-white/10
      bg-white/5
      p-8
      text-center
      backdrop-blur-xl"
    >
      <h3 className="text-5xl font-bold text-cyan-400">
        {number}
      </h3>

      <p className="mt-4 text-slate-300">
        {title}
      </p>
    </motion.div>
  );
};

export default StatCard;
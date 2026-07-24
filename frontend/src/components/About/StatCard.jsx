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
p-6
sm:p-8
text-center
backdrop-blur-xl"
    >
        <h3 className="text-4xl font-bold text-cyan-400 sm:text-5xl">
          {number}
      </h3>

      <p className="mt-3 text-sm text-slate-300 sm:text-base">
        {title}
      </p>
    </motion.div>
  );
};

export default StatCard;
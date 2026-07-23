import { motion } from "framer-motion";

const AuroraBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-0 top-20 h-96 w-96 rounded-full bg-cyan-500/15 blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-0 top-40 h-[500px] w-[500px] rounded-full bg-violet-500/15 blur-[160px]"
      />

      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-pink-500/10 blur-[140px]"
      />
    </div>
  );
};

export default AuroraBackground;
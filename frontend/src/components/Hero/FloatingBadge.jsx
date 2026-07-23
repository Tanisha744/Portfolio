import { motion } from "framer-motion";

const FloatingBadge = ({ icon, title, className }) => {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.08,
      }}
      className={`
        absolute
        z-20
        hidden
        md:flex
        items-center
        gap-2
        rounded-xl
        border
        border-white/10
        bg-white/10
        px-4
        py-2
        backdrop-blur-xl
        shadow-[0_0_25px_rgba(99,102,241,.25)]
        ${className}
      `}
    >
      <span className="text-xl">{icon}</span>

      <span className="text-sm font-medium text-white">
        {title}
      </span>
    </motion.div>
  );
};

export default FloatingBadge; 
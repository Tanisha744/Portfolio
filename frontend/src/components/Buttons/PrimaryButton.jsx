import { motion } from "framer-motion";

const PrimaryButton = ({ children, onClick }) => {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      onClick={onClick}
      className="relative overflow-hidden rounded-xl
      bg-gradient-to-r from-violet-600 to-cyan-500
      px-7 py-3
      font-semibold
      text-white
      shadow-lg
      shadow-violet-500/30
      transition-all
      duration-300"
    >
      {children}
    </motion.button>
  );
};

export default PrimaryButton;
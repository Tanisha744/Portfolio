import { motion, useMotionValue, useSpring } from "framer-motion";

const MagneticButton = ({ children }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 150,
    damping: 15,
  });

  const springY = useSpring(y, {
    stiffness: 150,
    damping: 15,
  });

  function handleMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();

    const mx = e.clientX - rect.left - rect.width / 2;
    const my = e.clientY - rect.top - rect.height / 2;

    x.set(mx * 0.2);
    y.set(my * 0.2);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.button
      style={{
        x: springX,
        y: springY,
      }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      whileTap={{ scale: 0.95 }}
      className="
        rounded-xl
        bg-gradient-to-r
        from-cyan-500
        to-violet-600
        px-8
        py-4
        font-semibold
        text-white
        shadow-xl
        transition-all
        hover:shadow-cyan-500/40"
    >
      {children}
    </motion.button>
  );
};

export default MagneticButton;
import { motion, useScroll } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
      }}
      className="
      fixed
      top-0
      left-0
      right-0
      z-[999]
      h-[3px]
      origin-left
      bg-gradient-to-r
      from-cyan-400
      via-violet-500
      to-pink-500"
    />
  );
};

export default ScrollProgress;
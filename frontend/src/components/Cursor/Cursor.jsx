import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

const Cursor = () => {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, {
    stiffness: 550,
    damping: 30,
  });

  const y = useSpring(mouseY, {
    stiffness: 550,
    damping: 30,
  });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* Glow */}
      <motion.div
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="pointer-events-none fixed z-[9998] h-8 w-8 rounded-full bg-cyan-400/20 blur-xl"
      />

      {/* Dot */}
      <motion.div
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="pointer-events-none fixed z-[9999] h-0 w-0 rounded-full bg-cyan-200"
      />
    </>
  );
};

export default Cursor;
import { motion } from "framer-motion";

import Terminal from "./Terminal";
// import FloatingBadge from "./FloatingBadge";

const HeroCard = () => {
  return (
    <motion.div
      whileHover={{
        rotateY: 4,
        rotateX: -2,
      }}
      transition={{
        duration: 0.3,
      }}
      className="relative h-auto w-full max-w-[520px] sm:max-w-[560px] lg:h-[600px] "    >
      {/* Glow */}

      <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-cyan-500/20 via-violet-500/20 to-pink-500/20 blur-3xl" />

      {/* Console */}

      <div className="relative z-10 h-full">
        <Terminal />
      </div>

      {/* Floating Badges */}

      {/* <FloatingBadge
  icon="⚛️"
  title="React"
  className="hidden lg:flex right-[27vw] top-12"
/>

<FloatingBadge
  icon="🟣"
  title=".NET"
  className="hidden lg:flex right-0 top-24"
/>

<FloatingBadge
  icon="🟢"
  title="Angular"
  className="hidden lg:flex right-[27vw] bottom-28"
/>

<FloatingBadge
  icon="☁️"
  title="Azure"
  className="hidden lg:flex right-0 bottom-40"
/> */}
    </motion.div>
  );
};

export default HeroCard;
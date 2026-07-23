import { motion } from "framer-motion";

import Terminal from "./Terminal";
import FloatingBadge from "./FloatingBadge";

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
      className="relative h-[600px] w-[520px]"
    >
      {/* Glow */}

      <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-cyan-500/20 via-violet-500/20 to-pink-500/20 blur-3xl" />

      {/* Console */}

      <div className="relative z-10 h-full">
        <Terminal />
      </div>

      {/* Floating Badges */}

      <FloatingBadge
        icon="⚛️"
        title="React"
        className="-left-20 top-12"
      />

      <FloatingBadge
        icon="🟣"
        title=".NET"
        className="-right-20 top-24"
      />

      <FloatingBadge
        icon="🤖"
        title="AI"
        className="-left-16 bottom-28"
      />

      <FloatingBadge
        icon="☁️"
        title="Azure"
        className="-right-16 bottom-16"
      />
    </motion.div>
  );
};

export default HeroCard;
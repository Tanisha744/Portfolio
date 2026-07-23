import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaJava,
} from "react-icons/fa";

import {
  SiDotnet,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

const icons = [
  {
    Icon: FaReact,
    color: "text-cyan-400",
    top: "12%",
    left: "18%",
  },
  {
    Icon: SiDotnet,
    color: "text-violet-400",
    top: "20%",
    right: "14%",
  },
  {
    Icon: FaNodeJs,
    color: "text-green-400",
    bottom: "18%",
    left: "12%",
  },
  {
    Icon: SiMysql,
    color: "text-blue-400",
    bottom: "10%",
    right: "16%",
  },
  {
    Icon: SiMongodb,
    color: "text-green-500",
    top: "45%",
    left: "-5%",
  },
  {
    Icon: FaJava,
    color: "text-orange-400",
    top: "45%",
    right: "-5%",
  },
];

const HeroCard = () => {
  return (
    <motion.div
      animate={{
        y: [0, -15, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 5,
      }}
      className="relative h-[500px] w-[500px]"
    >
      {/* Glass Card */}

      <div
        className="
        absolute
        inset-0
        rounded-[40px]
        border
        border-white/10
        bg-white/5
        backdrop-blur-3xl
        overflow-hidden"
      >
        {/* Glow */}

        <div className="absolute -top-24 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-violet-500/20 blur-[120px]" />

        {/* Orb */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
          className="
          absolute
          left-1/2
          top-1/2
          h-64
          w-64
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-violet-500/30
          bg-gradient-to-br
          from-violet-500/20
          to-cyan-500/20
          shadow-[0_0_120px_rgba(124,58,237,.35)]"
        />

        {/* Floating Icons */}

        {icons.map(({ Icon, ...item }, index) => (
          <motion.div
            key={index}
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 3 + index,
            }}
            className={`absolute text-4xl ${item.color}`}
            style={{
              top: item.top,
              left: item.left,
              right: item.right,
              bottom: item.bottom,
            }}
          >
            <Icon />
          </motion.div>
        ))}

        {/* Text */}

        <div className="absolute bottom-12 w-full text-center">
          <h3 className="text-3xl font-bold">
            Full Stack
          </h3>

          <p className="mt-2 text-slate-400">
            React • .NET • AI
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroCard;
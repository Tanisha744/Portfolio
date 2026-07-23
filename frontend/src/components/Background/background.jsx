import { motion } from "framer-motion";

const Background = () => {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#030712]">
      {/* Purple Glow */}
      <motion.div
        animate={{
          x: [0, 120, -60, 0],
          y: [0, -80, 60, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        className="absolute top-[-150px] left-[-150px] h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-[120px]"
      />

      {/* Cyan Glow */}
      <motion.div
        animate={{
          x: [0, -100, 100, 0],
          y: [0, 100, -80, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        className="absolute bottom-[-200px] right-[-150px] h-[550px] w-[550px] rounded-full bg-cyan-500/20 blur-[140px]"
      />

      {/* Pink Glow */}
      <motion.div
        animate={{
          x: [0, 60, -60, 0],
          y: [0, -40, 40, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/10 blur-[120px]"
      />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Noise Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />
    </div>
  );
};

export default Background;
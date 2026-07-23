import { motion } from "framer-motion";

const blobs = [
  {
    size: 420,
    top: "10%",
    left: "-8%",
    color: "#06b6d4",
  },
  {
    size: 350,
    top: "60%",
    right: "-8%",
    color: "#7c3aed",
  },
];

const FloatingBlobs = () => {
  return (
    <>
      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          animate={{
            y: [-30, 30, -30],
          }}
          transition={{
            duration: 8 + index * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute rounded-full blur-[120px] opacity-20 -z-20"
          style={{
            width: blob.size,
            height: blob.size,
            background: blob.color,
            top: blob.top,
            left: blob.left,
            right: blob.right,
          }}
        />
      ))}
    </>
  );
};

export default FloatingBlobs;
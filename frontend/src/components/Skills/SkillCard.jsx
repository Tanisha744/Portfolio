import { motion } from "framer-motion";

const SkillCard = ({ skill }) => {
  const Icon = skill.icon;

  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.05,
      }}
      transition={{ duration: 0.25 }}
      className="
      rounded-2xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-5
      flex
      flex-col
      items-center
      justify-center
      gap-4
      hover:border-cyan-400/50
      hover:shadow-[0_0_30px_rgba(34,211,238,.25)]
      transition-all"
    >
      <Icon className={`text-5xl ${skill.color}`} />

      <p className="font-medium text-white">
        {skill.name}
      </p>
    </motion.div>
  );
};

export default SkillCard;
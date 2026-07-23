import { motion } from "framer-motion";

const ContactCard = ({
  icon,
  title,
  value,
}) => {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      className="
      flex
      items-center
      gap-5
      rounded-2xl
      border
      border-white/10
      bg-white/5
      p-5
      backdrop-blur-xl"
    >
      <div
        className="
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-xl
        bg-cyan-500/10
        text-2xl
        text-cyan-400"
      >
        {icon}
      </div>

      <div>

        <h3 className="font-semibold text-white">
          {title}
        </h3>

        <p className="mt-1 text-slate-400">
          {value}
        </p>

      </div>

    </motion.div>
  );
};

export default ContactCard;
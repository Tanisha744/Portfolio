import { motion } from "framer-motion";

const TimelineItem = ({ item, last }) => {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative flex gap-8"
    >
      {/* Timeline */}

      <div className="flex flex-col items-center">
        <div
          className="
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-full
          bg-gradient-to-r
          from-violet-500
          to-cyan-500
          text-2xl
          text-white
          shadow-lg"
        >
          <Icon />
        </div>

        {!last && (
          <div className="mt-3 h-32 w-[2px] bg-white/10"></div>
        )}
      </div>

      {/* Card */}

      <div
        className="
        mb-12
        flex-1
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-8
        backdrop-blur-xl"
      >
        <h3 className="text-2xl font-bold">
          {item.title}
        </h3>

        <p className="mt-2 text-cyan-400">
          {item.company}
        </p>

        <p className="mb-4 text-sm text-slate-500">
          {item.duration}
        </p>

        <p className="leading-8 text-slate-300">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

export default TimelineItem;
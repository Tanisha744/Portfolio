import { motion } from "framer-motion";

const stats = [
  {
    value: "11M",
    label: "Experience",
  },
  {
    value: "15+",
    label: "Projects",
  },
  {
    value: "4+",
    label: "Hackathons",
  },
];

const StatsGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      {stats.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.2 + index * 0.08,
          }}
          className="rounded-xl border border-white/10 bg-white/5 p-3 text-center"
        >
          <h3 className="text-xl font-bold text-white">
            {item.value}
          </h3>

          <p className="mt-1 text-[11px] uppercase tracking-wider text-slate-400">
            {item.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default StatsGrid;
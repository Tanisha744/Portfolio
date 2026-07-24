import { motion } from "framer-motion";

const ProfileSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
        Tanisha
      </h2>

      <p className="mt-1 text-xs sm:text-sm text-slate-400">
        Software Engineer • Full Stack Developer
      </p>

      <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-2">
        <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

        <span className="text-xs font-medium text-green-300">
          Open to Full-Time Opportunities
        </span>
      </div>
    </motion.div>
  );
};

export default ProfileSection;
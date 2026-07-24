import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const focusItems = ["Scalable Backend APIs", "Modern React Interfaces"];

const FocusList = () => {
  return (
    <div>
      <h3 className="mb-4 text-xs font-semibold uppercase tracking-[3px] text-cyan-400">
        Current Focus
      </h3>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
        {focusItems.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.8 + index * 0.08,
            }}
            className="flex items-center gap-3"
          >
            <FaCheckCircle className="text-green-400" />

            <span className="text-sm text-slate-300">{item}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FocusList;

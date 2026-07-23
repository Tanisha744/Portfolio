import { motion } from "framer-motion";

const SectionHeading = ({ title, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mx-auto mb-20 max-w-3xl text-center"
    >
      {/* Small Label */}
      <span
        className="
        inline-block
        rounded-full
        border
        border-cyan-400/30
        bg-cyan-400/10
        px-4
        py-2
        text-xs
        font-semibold
        uppercase
        tracking-[4px]
        text-cyan-400"
      >
        Portfolio
      </span>

      {/* Heading */}
      <h2
        className="
        mt-6
        text-4xl
        font-bold
        leading-tight
        text-white
        md:text-5xl"
      >
        {title}
      </h2>

      {/* Gradient Line */}
      <div
        className="
        mx-auto
        mt-5
        h-1
        w-24
        rounded-full
        bg-gradient-to-r
        from-cyan-400
        via-violet-500
        to-pink-500"
      />

      {/* Subtitle */}
      <p
        className="
        mx-auto
        mt-6
        max-w-2xl
        text-lg
        leading-8
        text-slate-400"
      >
        {subtitle}
      </p>
    </motion.div>
  );
};

export default SectionHeading;
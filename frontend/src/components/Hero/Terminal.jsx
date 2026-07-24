import { motion } from "framer-motion";

import ProfileSection from "./console/ProfileSection";
import StackGrid from "./console/StackGrid";
import FocusList from "./console/FocusList";
import StatsGrid from "./console/StatsGrid";
// import ConsoleDivider from "./console/ConsoleDivider";

const Terminal = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      className="
min-h-[560px]
rounded-3xl
border
border-white/10
bg-[#0F172A]/80
backdrop-blur-xl
"
    >
      {/* Header */}

      <div className="flex items-center border-b border-white/10 px-5 py-4">

        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
        </div>

        <span className="ml-4 text-xs uppercase tracking-[4px] text-slate-500">
          developer.profile
        </span>

      </div>

      {/* Body */}

      <div
className="
space-y-5
p-4
sm:p-5
lg:p-6
"
>

        <ProfileSection />

        {/* <ConsoleDivider /> */}

        <StackGrid />

        {/* <ConsoleDivider /> */}

        <FocusList />
        {/* <ConsoleDivider /> */}

        <StatsGrid />

      </div>
    </motion.div>
  );
};

export default Terminal;
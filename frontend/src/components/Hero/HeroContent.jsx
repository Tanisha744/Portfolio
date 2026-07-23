import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
// import SocialIcons from "./SocialIcons";
// import HeroButtons from "./HeroButtons";
// import TechChips from "./TechChips";
// import HeroStats from "./HeroStats";

const HeroContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: .8 }}
      className="max-w-2xl"
    >
      <p className="mb-4 text-lg font-medium text-cyan-400">
        👋 Hello, I'm
      </p>

      <h1 className="mb-5 text-6xl font-bold md:text-7xl">
        Tanisha
      </h1>

      <div className="mb-6 text-2xl font-semibold text-violet-400 md:text-4xl">
        <TypeAnimation
          sequence={[
            "Software Engineer",
            2000,
            ".NET Developer",
            2000,
            "React Developer",
            2000,
            
          ]}
          repeat={Infinity}
        />
      </div>

      <p className="max-w-xl text-lg leading-8 text-slate-300">
        Passionate about building scalable applications,
        AI-powered solutions, and intuitive digital
        experiences with React, ASP.NET Core, SQL Server,
        and modern cloud technologies.
      </p>

      {/* <HeroButtons />
      <TechChips />
      <SocialIcons />
      <HeroStats /> */}
    </motion.div>
  );
};

export default HeroContent;
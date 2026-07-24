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
      transition={{ duration: 0.8 }}
      className="
w-full
max-w-2xl
text-center
lg:text-left
"
    >
      <p className="mb-4 text-base sm:text-lg font-medium text-cyan-400">
        👋 Hello, I'm
      </p>

      <h1 className="mb-5 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
        Tanisha
      </h1>

      <div className="mb-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-violet-400 ">
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

      <p className="mx-auto max-w-xl text-base leading-7 sm:text-lg sm:leading-8 lg:mx-0 text-slate-300">
        Passionate about building scalable applications, AI-powered solutions,
        and intuitive digital experiences with React, ASP.NET Core, SQL Server,
        and modern cloud technologies.
      </p>
      <div className="mt-8 flex justify-center lg:justify-start ">
        <a
          href="http://localhost:5000/api/resume/download"
          target="_blank"
          rel="noopener noreferrer"
          className="
inline-flex
w-full
sm:w-auto
items-center
justify-center
gap-3
rounded-xl
bg-violet-600
px-7
py-4
font-semibold
text-white
transition-all
duration-300
hover:scale-105
hover:bg-violet-500
shadow-lg
shadow-violet-600/25
"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 16V4m0 12l-4-4m4 4l4-4M5 20h14"
            />
          </svg>
          Download Resume
        </a>
      </div>
      {/* <HeroButtons />
      <TechChips />
      <SocialIcons />
      <HeroStats /> */}
    </motion.div>
  );
};

export default HeroContent;

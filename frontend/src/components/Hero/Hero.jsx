import { motion } from "framer-motion";
// import ScrollDown from "./ScrollDown";

import HeroContent from "./HeroContent";
import HeroCard from "./HeroCard";
import AuroraBackground from "./AuroraBackground";

const Hero = () => {
  return (
    <section
  id="home"
  className="relative flex min-h-screen pt-24 lg:pt-0 items-center overflow-hidden">
  <AuroraBackground />

  <div
  className="
    mx-auto
    flex
    w-full
    max-w-7xl
    flex-col
    items-center
    justify-between
    gap-10
    px-5
    py-20
    sm:px-8
    md:gap-14
    md:py-24
    lg:flex-row
    lg:gap-16
    lg:px-8
    xl:px-0
  "
>
    <HeroContent />
    

    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="flex justify-center w-full lg:w-auto"
    >
      <HeroCard />
    </motion.div>
  </div>

  {/* <ScrollDown /> */}
</section>
  );
};

export default Hero;
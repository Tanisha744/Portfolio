import { motion } from "framer-motion";
// import ScrollDown from "./ScrollDown";

import HeroContent from "./HeroContent";
import HeroCard from "./HeroCard";
import AuroraBackground from "./AuroraBackground";

const Hero = () => {
  return (
    <section
  id="home"
  className="relative flex min-h-screen items-center overflow-hidden"
>
  <AuroraBackground />

  <div className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center justify-between gap-16 px-6 py-28 lg:flex-row">
    <HeroContent />

    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <HeroCard />
    </motion.div>
  </div>

  {/* <ScrollDown /> */}
</section>
  );
};

export default Hero;
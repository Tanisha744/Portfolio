import { motion } from "framer-motion";

import HeroContent from "./HeroContent";
import HeroCard from "./HeroCard";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center justify-between gap-16 px-6 py-28 lg:flex-row">
        <HeroContent />

        <motion.div
          initial={{
            opacity: 0,
            scale: .8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
        >
          <HeroCard />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
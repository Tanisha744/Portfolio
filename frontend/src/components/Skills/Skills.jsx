import { motion } from "framer-motion";
import Section from "../common/Section";
import SkillCategory from "./SkillCategory";
import { skills } from "./skillsData";

const Skills = () => {
  return (
    <Section
      id="skills"
      subtitle="TECH STACK"
      title="Technologies I Work With"
    >
      <div className="grid gap-14">
        {skills.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.15,
              duration: 0.6,
            }}
          >
            <SkillCategory category={category} />
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
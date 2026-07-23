import SkillCard from "./SkillCard";

const SkillCategory = ({ category }) => {
  return (
    <div>
      <h3 className="mb-8 text-3xl font-bold text-cyan-400">
        {category.title}
      </h3>

      <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
        {category.items.map((skill) => (
          <SkillCard
            key={skill.name}
            skill={skill}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
import Section from "../common/Section";
import ProjectCard from "./ProjectCard";
import { projects } from "./projectsData";

const Projects = () => {
  return (
    <Section
      id="projects"
      subtitle="PORTFOLIO"
      title="Featured Projects"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 h-[80vh]">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
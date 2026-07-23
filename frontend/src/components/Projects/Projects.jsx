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
      <div className="grid gap-10">
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
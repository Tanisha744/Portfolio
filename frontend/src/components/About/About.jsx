import Section from "../common/Section";
import ProfileCard from "./ProfileCard";
import Stats from "./Stats";

const About = () => {
  return (
    <Section
      id="about"
      subtitle="ABOUT"
      title="Building software that solves real problems."
    >
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <ProfileCard />

        <div>
          <h3 className="mb-6 text-4xl font-bold">
            Hi, I'm Tanisha 👋
          </h3>

          <p className="mb-6 leading-8 text-slate-300">
            I'm a final-year Computer Science Engineering
            student at Chitkara University with
            11 months of professional internship
            experience at Innova Solutions.
          </p>

          <p className="mb-6 leading-8 text-slate-300">
            I enjoy building scalable full-stack
            applications using React, ASP.NET Core,
            SQL Server, and modern cloud technologies.
            Recently, I've also been exploring AI and
            machine learning to create smarter user
            experiences.
          </p>

          <p className="leading-8 text-slate-300">
            My goal is to build products that are
            fast, intuitive, and impactful while
            continuously learning new technologies.
          </p>
        </div>
      </div>

      <Stats />
    </Section>
  );
};

export default About;
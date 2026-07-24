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
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <ProfileCard />

        <div>
          <h3 className="mb-5 text-3xl font-bold sm:text-4xl">
            Hi, I'm Tanisha 👋
          </h3>

          <p className="mb-5 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            I'm a final-year Computer Science Engineering
            student at Chitkara University with
            11 months of professional internship
            experience at Innova Solutions.
          </p>

          <p className="mb-5 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            I enjoy building scalable full-stack
            applications using React, ASP.NET Core,
            SQL Server, and modern cloud technologies.
            Recently, I've also been exploring AI and
            machine learning to create smarter user
            experiences.
          </p>

          <p className="text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
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
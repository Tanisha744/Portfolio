import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaJava,
  FaPython,
  FaDatabase,
  FaMicrosoft,
  FaDocker,
} from "react-icons/fa";

import {
  SiDotnet,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiGithub,
} from "react-icons/si";

export const skills = [
  {
    title: "Frontend",
    items: [
      { name: "React", icon: FaReact, color: "text-cyan-400" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
      { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: FaCss3Alt, color: "text-blue-400" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
    ],
  },

  {
    title: "Backend",
    items: [
      { name: ".NET", icon: SiDotnet, color: "text-violet-500" },
      { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
      { name: "Java", icon: FaJava, color: "text-red-500" },
      { name: "Python", icon: FaPython, color: "text-yellow-400" },
    ],
  },

  {
    title: "Database",
    items: [
      { name: "SQL Server", icon: FaDatabase, color: "text-red-500" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
      { name: "MySQL", icon: SiMysql, color: "text-blue-500" },
    ],
  },

  {
    title: "Tools",
    items: [
      { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
      { name: "GitHub", icon: SiGithub, color: "text-white" },
      { name: "Docker", icon: FaDocker, color: "text-blue-500" },
      { name: "Azure", icon: FaMicrosoft, color: "text-cyan-500" },
      { name: "Postman", icon: SiPostman, color: "text-orange-500" },
    ],
  },
];
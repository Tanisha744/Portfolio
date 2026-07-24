import travelopiaImage from "../../assets/images/Travelopia.png";
import ProjectX from "../../assets/images/ProjectX.png";

export const projects = [
  {
    id: 1,
    title: "ProjectX",
    category: "Professional Project",
    description:
      "Enterprise data management platform built during my internship at Innova Solutions. Features role-based access, dashboard analytics, secure authentication, and centralized project management.",

    tech: [
      "React",
      "ASP.NET Core",
      "SQL Server",
      "Entity Framework",
      "JWT",
    ],

    // github: "",
    // live: "",

    image: ProjectX,

    featured: true,
  },

  {
    id: 2,

    title: "Travelopia",

    category: "Full Stack",

    description:
      "Travel booking platform with resort listings, booking management, responsive UI, admin dashboard, and modern animations.",

    tech: [
      "React",
      "Tailwind",
      "Node",
      "MongoDB"
    ],

    github: "",

    live: "",

    image: travelopiaImage,
  },

  
];
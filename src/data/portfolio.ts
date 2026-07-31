import type { Project, BlogPost } from "../types/index";

export const projects: Project[] = [
{
  "name": "PayFlow - Digital Payment Backend",
  "description": "A secure and scalable digital payment backend built with Spring Boot. Features include JWT authentication, role-based access control, merchant and customer management, wallet operations, transaction processing, payment gateway integration, Redis caching, Kafka event-driven messaging, and RESTful APIs. Designed with clean architecture, Docker support, and production-ready best practices.",
  "stars": 0,
  "tech": "Spring Boot, Spring Security, JWT, PostgreSQL, Redis, Kafka, Docker",
  "link": "https://payflow.amreshmaurya.com",
  "github": "https://github.com/amreshcraft/payflow",
  "image_url": "/projects/payflow.png"
},
{
  "name": "BookStore - E-commerce Backend",
  "description": "A complete e-commerce backend application built with Spring Boot. Features include user authentication with JWT, role-based access control, product and inventory management, cart and order processing, secure REST APIs, and AWS S3 integration for image storage. Designed with scalable architecture and clean code practices.",
  "stars": 0,
  "tech": "Spring Boot, Spring Security, JWT, PostgreSQL, AWS S3, Docker",
  "link": "https://api.amreshmaurya.com",
  "github": "https://github.com/amreshcraft/bookstore",
  "image_url": "/projects/bookstore.png"
},
  {
    name: "Filmiflix",
    description:
      "A cinematic discovery platform that aggregates movie metadata, cast details, and trailers. Features an intuitive search interface with real-time API integration.",
    stars: 3,
    tech: "TypeScript, React, Tailwind CSS",
    link: "https://filmiflix.netlify.app",
    github: "https://github.com/amreshpro/filmiflix",
    image_url: "/projects/filmiflix.png",
  },
  // {
  //   name: "Zsh Productivity Theme",
  //   description:
  //     "A lightweight, aesthetically optimized Zsh theme designed for developers. Enhances terminal workflow with clear git status indicators and minimal latency.",
  //   stars: 24,
  //   tech: "Shell, Zsh, Oh My Zsh",
  //   link: "https://github.com/amreshpro/zsh-theme",
  //   github: "https://github.com/amreshpro/zsh-theme",
  //   image_url: "",
  // },
];

export const blogPosts: BlogPost[] = [
    {
    title: "POJO vs JavaBean vs Spring Bean",
    date: "August 2025",
    description:
      "A clear comparison of POJO, JavaBean, and Spring Bean concepts, highlighting their roles and differences in full-stack Java development.",
    link: "https://amreshpro.medium.com/demystifying-java-beans-pojo-vs-javabean-vs-spring-bean-4844be3781f9",
    tags: ["Java", "Spring Boot", "Backend"],
  },
 

];

import type { Project, BlogPost } from "../types/index";

export const projects: Project[] = [

{
  "name": "BookStore - E-commerce Backend",
  "description": "A complete e-commerce backend application built with Spring Boot. Features include user authentication with JWT, role-based access control, product and inventory management, cart and order processing, secure REST APIs, and AWS S3 integration for image storage. Designed with scalable architecture and clean code practices.",
  "stars": 0,
  "tech": "Spring Boot, Spring Security, JWT, PostgreSQL, AWS S3, Docker",
  "link": "https://api.amreshmaurya.com",
  "github": "https://github.com/amreshcraft/bookstore",
  "image_url": "/projects/bookstore.png"
},
// {
//   name: "GoCommerce API",
//   description:
//     "Production-ready e-commerce REST API built with Go, following clean architecture principles. Implements JWT authentication, PostgreSQL with GORM, Redis caching, Docker containerization, and comprehensive logging. Features include product management, user cart, order processing, and Stripe payment integration.",
//   stars: 0,
//   tech: "Go, Gin/Echo, PostgreSQL, Redis, JWT, Docker, Stripe",
//   link: "https://github.com/amreshcraft/gocommerce",
//   github: "https://github.com/amreshcraft/gocommerce",
//   image_url: "/projects/go-ecommerce.png",
// }

  // {
  //   name: "Tenant Lock",
  //   description:
  //     "A high-performance multi-tenant access control and resource locking system designed for SaaS architectures. Implements secure isolation and resource management for shared environments.",
  //   stars: 1,
  //   tech: "TypeScript, NestJS, PostgreSQL",
  //   link: "https://github.com/amreshcraft/tenant-lock",
  //   github: "https://github.com/amreshcraft/tenant-lock",
  //   image_url: "/projects/tenant-lock.png",
  // },
  // {
  //   name: "Filmiflix",
  //   description:
  //     "A cinematic discovery platform that aggregates movie metadata, cast details, and trailers. Features an intuitive search interface with real-time API integration.",
  //   stars: 3,
  //   tech: "TypeScript, React, Tailwind CSS",
  //   link: "https://filmiflix.netlify.app",
  //   github: "https://github.com/amreshpro/filmiflix",
  //   image_url: "/projects/filmiflix.png",
  // },
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
  {
    title: "Event Bubbling: Deep Technical Architecture & Failure Analysis",
    date: "Aug 15, 2024",
    description:
      "An in-depth exploration of the DOM event propagation model, examining how event bubbling works under the hood and analyzing common architectural failures that occur when managing complex event flows in modern web applications.",
    link: "https://medium.com/@amreshpro/event-bubbling-deep-technical-architecture-failure-analysis-a5b8dbf4ac1d",
    tags: [
      "JavaScript",
      "Web Development",
      "Software Architecture",
      "DOM",
      "Frontend",
    ],
  },
  {
    title: "The Power of the Curly Brace: Understanding JS Blocks",
    date: "February 2026",
    description:
      "A deep dive into JavaScript block statements: how curly braces group logic, manage lexical scope with let/const, and the critical difference between concise and block-body arrow functions.",
    link: "https://amreshpro.medium.com/the-power-of-the-curly-brace-understanding-js-blocks-4ef253810f18",
    tags: ["JavaScript", "ES6", "Web Development", "Coding Basics"],
  },
  {
    title: "Stop Using Var in JavaScript",
    date: "October 2025",
    description:
      "Modern JavaScript best practices explaining why let and const are safer, clearer, and preferred over var in ES6 and beyond.",
    link: "https://amreshpro.medium.com/stop-using-var-in-javascript-heres-why-let-const-are-better-07f24657d0b5",
    tags: ["JavaScript", "Best Practices", "ES6"],
  },

];

import { BiGlobe } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
const projects = [
  {
    title: "PayFlow",
    description:
      "A secure payment management platform designed to handle transactions, user authentication, and financial operations through a scalable backend architecture.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "JWT", "AWS"],
    image: "/projects/payflow.png",
    liveUrl: "#",
    githubUrl: "https://github.com/amreshcraft/payflow"
  },
  {
    title: "BookStore",
    description:
      "A full-stack online bookstore where users can browse books, manage their cart, place orders, and securely manage their accounts.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "React", "JWT"],
    image: "/projects/bookstore.png",
    liveUrl: "https://api.amreshmaurya.com",
    githubUrl: "https://github.com/amreshcraft/bookstore"
  },
  {
    title: "FilmiFlix",
    description:
      "A modern movie discovery platform that allows users to explore movies, view detailed information, search titles, and interact with a responsive interface.",
    tags: ["React", "JavaScript", "REST API", "TailwindCSS"],
    image: "/projects/filmiflix.png",
    liveUrl: "https://filmiflix.netlify.app",
    githubUrl: "https://github.com/amreshcraft/filmiflix"
  }
];

export const Projects = () => {
  return (
    <section className="max-w-4xl mx-auto p-6 font-sans">
      <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-8">
        My Projects
      </h2>

      <div className="space-y-6">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Image Thumbnail */}
            <div className="w-full md:w-80 h-48 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 flex-shrink-0">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Project Details */}
            <div className="flex-1 space-y-3">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                {project.title}
              </h3>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={project.liveUrl}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium transition-colors"
                >
                  <BiGlobe size={16} /> Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  className="inline-flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium transition-colors"
                >
                  <BsGithub size={16} /> Open Repository
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
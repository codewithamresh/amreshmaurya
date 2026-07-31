import { Github, ExternalLink, Star, Code2, Layers } from "lucide-react";
import { projects } from "../data/portfolio";

interface ProjectsProps {
  isDark: boolean;
  isVisible: boolean;
}

export const Projects = ({ isDark, isVisible }: ProjectsProps) => {
  const textPrimary = isDark ? "text-[#FAFAFA]" : "text-[#0F172A]";
  const textMuted = isDark ? "text-[#A1A1AA]" : "text-[#71717A]";
  const border = isDark ? "border-[#27272A]" : "border-[#E4E4E7]";
  const cardBg = isDark ? "bg-[#18181B]" : "bg-white";
  const badgeBg = isDark ? "bg-[#27272A]" : "bg-[#F4F4F5]";

  return (
    <section
      className={`mb-32 transition-all duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Section Header */}
      <div className="mb-16 text-center md:text-left">
        <div className="mb-4 flex items-center justify-center gap-3 md:justify-start">
          <div className="h-[2px] w-10 bg-[#4F46E5]" />
          <span className="font-mono text-sm uppercase tracking-widest text-[#4F46E5]">
            Selected Works
          </span>
        </div>
        <h2 className={`text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl ${textPrimary}`}>
          Featured <span className="text-[#4F46E5]"  id="projects">Projects.</span>
        </h2>
      </div>

      {/* Projects List */}
      <div className="space-y-20 md:space-y-28">
        {projects.map((project, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <div
              key={project.name}
              className={`flex flex-col items-center gap-10 md:gap-14 ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Visual */}
              <div className="group relative w-full md:w-[55%]">
                <div
                  className={`relative aspect-video overflow-hidden rounded-2xl border-2 ${border} ${cardBg} shadow-lg transition-transform duration-300 group-hover:scale-[1.015]`}
                >
                  {project.image_url ? (
                    <img
                      src={project.image_url}
                      alt={project.name}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <Code2 className={`h-16 w-16 ${textMuted}`} />
                    </div>
                  )}

                  {/* Window dots */}
                  <div className="absolute left-4 top-4 flex gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-[#EF4444]" />
                    <div className="h-2.5 w-2.5 rounded-full bg-[#EAB308]" />
                    <div className="h-2.5 w-2.5 rounded-full bg-[#22C55E]" />
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 bg-[#0F172A]/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-white p-3.5 text-[#4F46E5] shadow-lg transition-transform hover:scale-110"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-white p-3.5 text-[#4F46E5] shadow-lg transition-transform hover:scale-110"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full space-y-5 md:w-[45%]">
                <div className="flex items-center gap-4">
                  <span className={`font-mono text-3xl font-black opacity-20 ${textPrimary}`}>
                    0{idx + 1}
                  </span>
                  <div
                    className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${border} ${badgeBg} ${textMuted}`}
                  >
                    <Star className="h-3 w-3 fill-[#14B8A6] text-[#14B8A6]" />
                    {project.stars} Stars
                  </div>
                </div>

                <h3 className={`text-3xl font-bold tracking-tight ${textPrimary}`}>
                  {project.name}
                </h3>

                <p className={`text-base leading-relaxed md:text-lg ${textMuted}`}>
                  {project.description}
                </p>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.split(",").map((tech) => (
                    <span
                      key={tech}
                      className={`rounded-lg border px-3 py-1.5 font-mono text-xs ${border} ${badgeBg} ${textMuted}`}
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#4F46E5] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:scale-[1.03] hover:bg-[#4338CA] active:scale-[0.98]"
                  >
                    Live Demo
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 rounded-xl border-2 px-5 py-2.5 text-sm font-semibold transition-colors ${border} ${textPrimary} ${
                      isDark ? "hover:bg-[#27272A]" : "hover:bg-[#F4F4F5]"
                    }`}
                  >
                    GitHub
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Browse more */}
      <div className="mt-20 text-center">
        <a
          href="https://github.com/amreshcraft?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className={`group inline-flex items-center gap-3 rounded-2xl border-2 px-7 py-3.5 font-semibold transition-all ${border} ${textMuted} hover:border-[#4F46E5] hover:text-[#4F46E5]`}
        >
          <Layers className="h-5 w-5 transition-transform group-hover:rotate-12" />
          Browse Archive
          <span className="text-[#4F46E5]">More Projects</span>
        </a>
      </div>
    </section>
  );
};

export default Projects;
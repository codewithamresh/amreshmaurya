import { Github, ExternalLink, Star, Code2, Layers } from "lucide-react";
import { projects } from "../data/portfolio";

interface ProjectsProps {
  isDark: boolean;
  isVisible: boolean;
}

export const Projects = ({ isDark, isVisible }: ProjectsProps) => {
  const textClass = isDark ? "text-white" : "text-gray-900";
  const subTextClass = isDark ? "text-gray-400" : "text-gray-600";

  return (
    <section
      className={`mb-32 transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      {/* Section Heading */}
      <div className="flex flex-col mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-[2px] w-12 bg-purple-500" />
          <span className="font-mono text-purple-500 tracking-widest text-sm uppercase">
            Selected Works
          </span>
        </div>
        <h2
          className={`text-5xl md:text-6xl font-black ${textClass} tracking-tighter`}
        >
          Featured{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
            Projects.
          </span>
        </h2>
      </div>

      <div className="space-y-24">
        {projects.map((project, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={project.name}
              className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-12 items-center`}
            >
              {/* Project Visual (Placeholder for Screenshot) */}
              <div className="w-full md:w-3/5 relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-[2.5rem] opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500" />
                <div
                  className={`relative aspect-video rounded-[2rem] border overflow-hidden ${isDark ? "border-white/10" : "border-black/5"} shadow-2xl`}
                >
                  <div
                    className={`absolute inset-0 ${isDark ? "bg-gray-800" : "bg-gray-200"} flex items-center justify-center`}
                  >
                    {project.image_url ? (
                      <img
                        src={project.image_url}
                        alt={project.name}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <Code2
                        className={`w-20 h-20 ${isDark ? "text-gray-700" : "text-gray-400"}`}
                      />
                    )}
                    <div className="absolute top-6 left-6 flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                  </div>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-purple-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                    <a
                      href={project.github}
                      className="p-4 bg-white rounded-full text-purple-600 hover:scale-110 transition-transform shadow-xl"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                    <a
                      href={project.link}
                      className="p-4 bg-white rounded-full text-purple-600 hover:scale-110 transition-transform shadow-xl"
                    >
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="w-full md:w-2/5 space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-black opacity-10 font-mono">
                    0{idx + 1}
                  </span>
                  <div
                    className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold border ${
                      isDark
                        ? "border-purple-500/30 text-purple-400 bg-purple-500/10"
                        : "border-purple-200 text-purple-600 bg-purple-50"
                    }`}
                  >
                    <Star className="w-3 h-3 fill-current" /> {project.stars}{" "}
                    Stars
                  </div>
                </div>

                <h3
                  className={`text-4xl font-bold ${textClass} hover:text-purple-500 transition-colors cursor-default`}
                >
                  {project.name}
                </h3>

                <p className={`${subTextClass} text-lg leading-relaxed`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {/* Splitting tech string into pills */}
                  {project.tech.split(",").map((t) => (
                    <span
                      key={t}
                      className={`px-4 py-1.5 rounded-xl text-xs font-mono tracking-tight border transition-colors ${
                        isDark
                          ? "bg-white/5 border-white/10 text-gray-300"
                          : "bg-black/5 border-black/10 text-gray-600"
                      } group-hover:border-purple-500/50`}
                    >
                      {t.trim()}
                    </span>
                  ))}
                </div>

                <div className="pt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    className={`inline-flex items-center gap-2 font-bold group ${textClass}`}
                  >
                    Explore Repository
                    <div className="p-2 rounded-full bg-purple-500 text-white group-hover:translate-x-2 transition-transform">
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modern Footer Button */}
      <div className="mt-24 text-center">
        <a
          href="https://github.com/amreshcraft?tab=repositories"
          target="_blank"
          className={`group inline-flex items-center gap-4 px-8 py-4 rounded-2xl border-2 transition-all font-bold ${
            isDark
              ? "border-gray-800 hover:border-blue-500 text-gray-400 hover:text-white"
              : "border-gray-200 hover:border-blue-500 text-gray-600 hover:text-black"
          }`}
        >
          <Layers className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          Browse Archive
          <span className="text-blue-500">More Projects</span>
        </a>
      </div>
    </section>
  );
};

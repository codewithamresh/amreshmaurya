import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/portfolio';

interface ProjectsProps {
  isDark: boolean;
  isVisible: boolean;
}

export const Projects = ({ isDark, isVisible }: ProjectsProps) => {
  const textClass = isDark ? 'text-white' : 'text-gray-900';
  const subTextClass = isDark ? 'text-gray-400' : 'text-gray-600';
  const cardBgClass = isDark ? 'from-gray-900 to-gray-800' : 'from-white to-gray-100';
  const borderClass = isDark ? 'border-gray-700' : 'border-gray-300';

  return (
    <section
      className={`mb-32 transition-all duration-1000 delay-400 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <h2 className={`text-3xl font-bold mb-8 flex items-center gap-3 ${textClass}`}>
        <Github className="text-purple-400" />
        Featured Projects
      </h2>

      <div className="grid gap-6">
        {projects.map((project, idx) => (
          <a
            key={project.name}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group p-6 bg-gradient-to-br ${cardBgClass} rounded-xl border ${borderClass} hover:border-purple-500 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${
              isDark ? 'hover:shadow-purple-500/20' : 'hover:shadow-purple-400/20'
            }`}
            style={{
              transitionDelay: `${idx * 100}ms`,
              animation: isVisible
                ? `slideInUp 0.6s ease-out ${(idx + 4) * 100}ms both`
                : 'none',
            }}
          >
            <div className="flex items-start justify-between mb-3">
              <h3
                className={`text-2xl font-bold ${textClass} group-hover:text-purple-400 transition-colors`}
              >
                {project.name}
              </h3>
              <div className="flex items-center gap-3">
                <span className={`flex items-center gap-1 ${subTextClass}`}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {project.stars}
                </span>
                <ExternalLink
                  className={`w-5 h-5 ${subTextClass} group-hover:text-purple-400 transition-colors`}
                />
              </div>
            </div>
            <p className={`${subTextClass} mb-3`}>{project.description}</p>
            <span
              className={`inline-block px-3 py-1 ${
                isDark
                  ? 'bg-blue-900/30 text-blue-400 border-blue-500/30'
                  : 'bg-blue-100 text-blue-600 border-blue-400/50'
              } rounded-full text-sm border`}
            >
              {project.tech}
            </span>
          </a>
        ))}
      </div>

      <a
        href="https://github.com/amreshcraft?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-8 inline-flex items-center gap-2 px-6 py-3 ${
          isDark ? 'bg-gray-900 hover:bg-gray-800' : 'bg-white hover:bg-gray-100'
        } rounded-lg transition-all duration-300 hover:scale-105 border ${borderClass} hover:border-blue-400 hover:shadow-lg`}
      >
        View all repositories <ExternalLink className="w-4 h-4" />
      </a>
    </section>
  );
};
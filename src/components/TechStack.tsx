import { Code2, Database, Terminal, ExternalLink } from 'lucide-react';
import { techStack, techIcons } from '../data/portfolio';

interface TechStackProps {
  isDark: boolean;
  isVisible: boolean;
}

export const TechStack = ({ isDark, isVisible }: TechStackProps) => {
  const textClass = isDark ? 'text-white' : 'text-gray-900';
  const cardBgClass = isDark ? 'from-gray-900 to-gray-800' : 'from-white to-gray-100';
  const borderClass = isDark ? 'border-gray-700' : 'border-gray-300';
  const hoverBorderClass = isDark ? 'hover:border-blue-500' : 'hover:border-blue-400';

  return (
    <section
      className={`mb-32 transition-all duration-1000 delay-200 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <h2 className={`text-3xl font-bold mb-8 flex items-center gap-3 ${textClass}`}>
        <Code2 className="text-blue-400" />
        Tech Stack
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {Object.entries(techStack).map(([category, techs], idx) => (
          <div
            key={category}
            className={`p-6 bg-gradient-to-br ${cardBgClass} rounded-xl border ${borderClass} ${hoverBorderClass} transition-all duration-300 group hover:shadow-xl ${
              isDark ? 'hover:shadow-blue-500/20' : 'hover:shadow-blue-400/20'
            } hover:scale-[1.02]`}
            style={{
              transitionDelay: `${idx * 100}ms`,
              animation: isVisible
                ? `slideInUp 0.6s ease-out ${idx * 100}ms both`
                : 'none',
            }}
          >
            <div className="flex items-center gap-2 mb-4">
              {category === 'frontend' && <Code2 className="text-blue-400 w-5 h-5" />}
              {category === 'backend' && <Terminal className="text-green-400 w-5 h-5" />}
              {category === 'database' && <Database className="text-purple-400 w-5 h-5" />}
              {category === 'tools' && <ExternalLink className="text-orange-400 w-5 h-5" />}
              <h3 className={`text-xl font-semibold capitalize ${textClass}`}>
                {category}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {techs.map((tech) => (
                <span
                  key={tech}
                  className={`px-3 py-1 ${
                    isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'
                  } rounded-full text-sm border ${borderClass} ${hoverBorderClass} transition-all duration-300 hover:scale-110 flex items-center gap-1.5`}
                >
                  <span className="text-base">{techIcons[tech]}</span>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
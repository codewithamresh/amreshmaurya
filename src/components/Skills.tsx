import { Code2, Database, Server, Wrench } from 'lucide-react';
import {
  ProgrammingLanguagesArrayList,
  FrontendTechnologiesArrayList,
  BackendTechnologiesArrayList,
  DatabaseArrayList,
  OtherSkillsArrayList,
} from '../data/skills';

import type { Skill } from '../types/index';

interface SkillsProps {
  isDark: boolean;
  isVisible: boolean;
}

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
  isDark: boolean;
  delay: number;
  isVisible: boolean;
}

const SkillCategory = ({
  title,
  icon,
  skills,
  isDark,
  delay,
  isVisible,
}: SkillCategoryProps) => {
  const cardBgClass = isDark ? 'from-gray-900 to-gray-800' : 'from-white to-gray-100';
  const borderClass = isDark ? 'border-gray-700' : 'border-gray-300';
  const textClass = isDark ? 'text-white' : 'text-gray-900';

  return (
    <div
      className={`p-8 bg-gradient-to-br ${cardBgClass} rounded-xl border ${borderClass} hover:border-blue-500 transition-all duration-300 group hover:shadow-xl ${
        isDark ? 'hover:shadow-blue-500/20' : 'hover:shadow-blue-400/20'
      } hover:scale-[1.02]`}
      style={{
        transitionDelay: `${delay}ms`,
        animation: isVisible ? `slideInUp 0.6s ease-out ${delay}ms both` : 'none',
      }}
    >
      <div className="flex items-center gap-3 mb-6">
        {icon}
        <h3 className={`text-2xl font-bold ${textClass}`}>{title}</h3>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className={`flex flex-col items-center gap-3 p-4 rounded-lg ${
              isDark ? 'bg-gray-800/50' : 'bg-gray-50'
            } border ${borderClass} hover:border-blue-400 transition-all duration-300 hover:scale-110 hover:shadow-lg group/item`}
          >
            <div className="relative w-12 h-12 flex items-center justify-center">
              <img
                src={skill.image_url}
                alt={skill.name}
                className="w-full h-full object-contain transition-transform duration-300 group-hover/item:scale-110"
                onError={(e) => {
                  // Fallback if image doesn't load
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <span
              className={`text-sm font-medium text-center ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              } group-hover/item:text-blue-400 transition-colors`}
            >
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Skills = ({ isDark, isVisible }: SkillsProps) => {
  const textClass = isDark ? 'text-white' : 'text-gray-900';

  return (
    <section
      className={`mb-32 transition-all duration-1000 delay-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <h2 className={`text-4xl font-bold mb-12 flex items-center gap-3 ${textClass}`}>
        <Code2 className="text-blue-400 w-8 h-8" />
        Technical Skills
      </h2>

      <div className="space-y-8">
        <SkillCategory
          title="Programming Languages"
          icon={<Code2 className="text-purple-400 w-6 h-6" />}
          skills={ProgrammingLanguagesArrayList}
          isDark={isDark}
          delay={0}
          isVisible={isVisible}
        />

        <SkillCategory
          title="Frontend Technologies"
          icon={<Code2 className="text-blue-400 w-6 h-6" />}
          skills={FrontendTechnologiesArrayList}
          isDark={isDark}
          delay={100}
          isVisible={isVisible}
        />

        <SkillCategory
          title="Backend Technologies"
          icon={<Server className="text-green-400 w-6 h-6" />}
          skills={BackendTechnologiesArrayList}
          isDark={isDark}
          delay={200}
          isVisible={isVisible}
        />

        <SkillCategory
          title="Databases"
          icon={<Database className="text-orange-400 w-6 h-6" />}
          skills={DatabaseArrayList}
          isDark={isDark}
          delay={300}
          isVisible={isVisible}
        />

        <SkillCategory
          title="Tools & Technologies"
          icon={<Wrench className="text-yellow-400 w-6 h-6" />}
          skills={OtherSkillsArrayList}
          isDark={isDark}
          delay={400}
          isVisible={isVisible}
        />
      </div>

      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};


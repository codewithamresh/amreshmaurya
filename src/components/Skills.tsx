import {
  Database,
  Server,
  Sparkles,
  Languages,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import {
  ProgrammingLanguagesArrayList,
  BackendTechnologiesArrayList,
  DatabaseArrayList,
  AIPoweredToolsArrayList,
} from "../data/skills";

interface SkillsProps {
  isDark: boolean;
  isVisible: boolean;
}

export const Skills = ({ isDark, isVisible }: SkillsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const categories = [
    {
      title: "Languages",
      icon: <Languages className="h-5 w-5" />,
      skills: ProgrammingLanguagesArrayList,
    },
    {
      title: "Backend",
      icon: <Server className="h-5 w-5" />,
      skills: BackendTechnologiesArrayList,
    },
    {
      title: "Databases",
      icon: <Database className="h-5 w-5" />,
      skills: DatabaseArrayList,
    },
    {
      title: "AI Tools",
      icon: <Sparkles className="h-5 w-5" />,
      skills: AIPoweredToolsArrayList,
    },
  ];

  const textPrimary = isDark ? "text-[#FAFAFA]" : "text-[#0F172A]";
  const textMuted = isDark ? "text-[#A1A1AA]" : "text-[#71717A]";
  const border = isDark ? "border-[#27272A]" : "border-[#E4E4E7]";
  const cardBg = isDark ? "bg-[#18181B]" : "bg-white";
  const activeBg = isDark ? "bg-[#4F46E5]/10" : "bg-[#4F46E5]/5";
  const hoverBg = isDark ? "hover:bg-[#27272A]" : "hover:bg-[#F4F4F5]";

  return (
    <section
      className={`mb-32 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="flex flex-col gap-12 md:flex-row">
        {/* Left — Title + Tabs */}
        <div className="md:w-1/3">
          <div className="sticky top-24">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-[2px] w-10 bg-[#4F46E5]" />
              <span className="font-mono text-sm uppercase tracking-widest text-[#4F46E5]">
                Capabilities
              </span>
            </div>

            <h2 className={`mb-5 text-4xl font-bold tracking-tight sm:text-5xl ${textPrimary}`}>
              Technical <br />
              <span className="text-[#4F46E5]">Expertise</span>
            </h2>

            <p className={`mb-8 text-base leading-relaxed md:text-lg ${textMuted}`}>
              A focused toolkit of modern technologies I use to build reliable,
              high-performance backend systems.
            </p>

            <div className="space-y-1.5">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`flex w-full items-center justify-between rounded-xl border px-4 py-3.5 text-left transition-all duration-200 ${
                    activeTab === idx
                      ? `${activeBg} border-[#4F46E5]/40 ${textPrimary}`
                      : `border-transparent ${textMuted} ${hoverBg}`
                  }`}
                >
                  <div className="flex items-center gap-3 font-medium">
                    <span className={activeTab === idx ? "text-[#4F46E5]" : ""}>
                      {cat.icon}
                    </span>
                    {cat.title}
                  </div>
                  {activeTab === idx && (
                    <ChevronRight className="h-4 w-4 text-[#4F46E5]" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right — Skills Grid */}
        <div className="md:w-2/3">
          <div className="grid min-h-[380px] grid-cols-2 gap-4 sm:grid-cols-3">
            {categories[activeTab].skills.map((skill, i) => (
              <div
                key={skill.id}
                className={`group relative rounded-2xl border p-5 transition-all duration-300 ${border} ${cardBg} hover:border-[#4F46E5]/40 hover:shadow-lg`}
                style={{
                  animation: `popIn 0.35s ease-out ${i * 40}ms both`,
                }}
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="relative flex h-14 w-14 items-center justify-center">
                    <img
                      src={skill.image_url}
                      alt={skill.name}
                      className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  <div className="text-center">
                    <h4
                      className={`text-sm font-semibold transition-colors ${textPrimary} group-hover:text-[#4F46E5]`}
                    >
                      {skill.name}
                    </h4>
                    <div className="mx-auto mt-1.5 h-0.5 w-0 rounded-full bg-[#4F46E5] transition-all duration-300 group-hover:w-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes popIn {
          0% {
            opacity: 0;
            transform: scale(0.92) translateY(8px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
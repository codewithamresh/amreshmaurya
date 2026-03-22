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
      icon: <Languages />,
      skills: ProgrammingLanguagesArrayList,
      color: "text-purple-400",
    },
    {
      title: "Backend",
      icon: <Server />,
      skills: BackendTechnologiesArrayList,
      color: "text-green-400",
    },
    // {
    //   title: "Frontend",
    //   icon: <Code2 />,
    //   skills: FrontendTechnologiesArrayList,
    //   color: "text-blue-400",
    // },
    {
      title: "Databases",
      icon: <Database />,
      skills: DatabaseArrayList,
      color: "text-orange-400",
    },
    {
      title: "AI Tools",
      icon: <Sparkles />,
      skills: AIPoweredToolsArrayList,
      color: "text-pink-400",
    },
    // {
    //   title: "DevOps",
    //   icon: <Wrench />,
    //   skills: OtherSkillsArrayList,
    //   color: "text-yellow-400",
    // },
  ];

  const textClass = isDark ? "text-white" : "text-gray-900";
  const subTextClass = isDark ? "text-gray-400" : "text-gray-500";

  return (
    <section
      className={`mb-32 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left Side: Navigation & Title */}
        <div className="md:w-1/3">
          <div className="sticky top-24">
            <h2
              className={`text-5xl font-bold mb-6 tracking-tighter ${textClass}`}
            >
              Technical <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">
                Expertise
              </span>
            </h2>
            <p className={`${subTextClass} mb-8 text-lg`}>
              A comprehensive toolkit of modern technologies I use to build
              high-performance applications.
            </p>

            <div className="space-y-2">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${
                    activeTab === idx
                      ? (isDark
                          ? "bg-indigo-500/10 border-indigo-500/50"
                          : "bg-indigo-50 border-indigo-200") +
                        " border translate-x-2"
                      : "border-transparent hover:translate-x-1"
                  }`}
                >
                  <div
                    className={`  flex items-center gap-3 font-medium ${activeTab === idx ? "text-indigo-500" : subTextClass}`}
                  >
                    <span className={activeTab === idx ? cat.color : ""}>
                      {cat.icon}
                    </span>
                    {cat.title}
                  </div>
                  {activeTab === idx && (
                    <ChevronRight className="w-4 h-4 text-indigo-500" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Skill Display Grid */}
        <div className="md:w-2/3">
          <div
            className={`grid grid-cols-2 sm:grid-cols-3 gap-4 min-h-[400px]`}
          >
            {categories[activeTab].skills.map((skill, i) => (
              <div
                key={skill.id}
                className={`group relative p-6 h-fit rounded-2xl border transition-all duration-500 ${
                  isDark
                    ? "bg-gray-900/50 border-gray-800"
                    : "bg-white border-gray-100"
                } hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10`}
                style={{
                  animation: `popIn 0.4s ease-out ${i * 50}ms both`,
                }}
              >
                {/* Visual Flair */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div
                    className={`w-2 h-2 rounded-full bg-indigo-500 animate-ping`}
                  />
                </div>

                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 relative flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                    <img
                      src={skill.image_url}
                      alt={skill.name}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-center">
                    <h4
                      className={`font-bold text-sm ${textClass} group-hover:text-indigo-500 transition-colors`}
                    >
                      {skill.name}
                    </h4>
                    <div
                      className={`h-1 w-0 group-hover:w-full mx-auto mt-1 bg-indigo-500 transition-all duration-300 rounded-full`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes popIn {
          0% { opacity: 0; transform: scale(0.9) translateY(10px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </section>
  );
};

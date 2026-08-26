
const skillCategories = [
  {
    category: "Backend",
    skills: [
      "Java",
      "Spring Boot",
      "Node.js",
      "Express",
      "REST APIs",
      "PostgreSQL",
      "MySQL",
    ],
  },
  {
    category: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Redux",
    ],
  },
  {
    category: "Tools & Cloud",
    skills: ["Git", "Docker", "AWS", "Linux"],
  },
];

export const Skills = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 font-sans">
      {/* Header */}
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-purple-600 dark:text-purple-400 mb-2">
          Technical Expertise
        </p>

        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
          Skills & Technologies
        </h2>

        <p className="mt-3 max-w-2xl text-sm md:text-base leading-relaxed text-slate-500 dark:text-slate-400">
          Technologies and tools I use to build scalable, reliable and
          user-focused applications.
        </p>
      </div>

      {/* Skills */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {skillCategories.map((cat) => (
          <div
            key={cat.category}
            className="
              group rounded-2xl p-6
              bg-slate-50/70 dark:bg-slate-900/50
              border border-slate-200/70 dark:border-slate-800
              transition-all duration-300
              hover:-translate-y-1
              hover:border-purple-200 dark:hover:border-purple-900
              hover:shadow-lg hover:shadow-purple-500/5
            "
          >
            {/* Category */}
            <div className="flex items-center gap-3 mb-5">
              <div className="h-2 w-2 rounded-full bg-purple-500" />

              <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                {cat.category}
              </h3>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="
                    px-3 py-1.5
                    text-xs font-medium
                    rounded-lg
                    bg-white dark:bg-slate-800
                    text-slate-600 dark:text-slate-300
                    border border-slate-200 dark:border-slate-700
                    transition-all duration-200
                    hover:border-purple-300
                    hover:text-purple-600
                    dark:hover:border-purple-700
                    dark:hover:text-purple-400
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
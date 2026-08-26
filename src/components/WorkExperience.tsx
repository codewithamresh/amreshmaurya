

const experiences = [
  {
    role: "Consultant Software Developer",
    company: "Trigya Innovations",
    period: "Nov 2025 - Feb 2026",
    responsibilities: [
      "Worked as a Software Developer Consultant on backend development and application features.",
      "Developed and maintained backend services using Node.js and REST APIs.",
      "Collaborated with the team to implement, test, and troubleshoot application functionality.",
      "Worked with existing codebases and contributed to improving application performance and reliability."
    ]
  },

  
];

export const WorkExperience = () => {
  return (
    <section className="max-w-4xl mx-auto p-6 font-sans">
      <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-8">
        Work Experience
      </h2>

      <div className="relative border-l-2 border-slate-200 dark:border-slate-700 ml-3 space-y-10">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative pl-8">
            {/* Timeline Dot */}
            <span className="absolute -left-[9px] top-1.5 w-4 h-4 bg-slate-900 dark:bg-white rounded-full border-4 border-white dark:border-slate-900" />
            
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              {exp.role} <span className="text-purple-600 font-semibold">@ {exp.company}</span>
            </h3>
            
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 mb-4">
              {exp.period}
            </p>

            <p className="font-semibold text-slate-800 dark:text-slate-200 text-sm mb-2">
              Key Responsibilities:
            </p>

            <ul className="list-disc list-inside space-y-1.5 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              {exp.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
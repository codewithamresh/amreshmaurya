

const educationList = [
  {
    degree: "Master of Computer Applications",
    institution: "MDU, Rohtak",
    period: "Sep 2022 - May 2024",
    description: "Completed a comprehensive curriculum in computer science, including courses in data structures, algorithms, software engineering, and artificial intelligence. Worked on several projects, including a web application for managing student organizations and a mobile app for tracking fitness activities."
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "MDU, Rohtak",
    period: "Sep 2019 - May 2022",
    description: "Completed a comprehensive curriculum in computer science, including courses in data structures, algorithms, software engineering, and artificial intelligence. Worked on several projects, including a web application for managing student organizations and a mobile app for tracking fitness activities."
  }
];

export const Education = () => {
  return (
    <section className="max-w-4xl mx-auto p-6 font-sans">
      <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-8">
        Education
      </h2>

      <div className="relative border-l-2 border-slate-200 dark:border-slate-700 ml-3 space-y-8">
        {educationList.map((edu, idx) => (
          <div key={idx} className="relative pl-8">
            {/* Dot */}
            <span className="absolute -left-[9px] top-1.5 w-4 h-4 bg-slate-900 dark:bg-white rounded-full border-4 border-white dark:border-slate-900" />
            
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              {edu.degree}
            </h3>
            
            <p className="text-base font-medium text-slate-800 dark:text-slate-200 mt-0.5">
              {edu.institution}
            </p>

            <p className="text-sm text-slate-500 dark:text-slate-400 my-2">
              {edu.period}
            </p>

            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed max-w-2xl">
              {edu.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
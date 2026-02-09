import { Github, Linkedin, Mail, ExternalLink, Terminal } from "lucide-react";

interface HeroProps {
  isDark: boolean;
  isVisible: boolean;
}

export const Hero = ({ isDark, isVisible }: HeroProps) => {
  const cardBg = isDark
    ? "bg-gray-900/50 border-gray-800"
    : "bg-white/50 border-gray-200";
  const textColor = isDark ? "text-gray-100" : "text-gray-900";
  const subTextColor = isDark ? "text-gray-400" : "text-gray-600";

  return (
    <section
      className={`relative min-h-screen flex flex-col justify-center transition-all duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Background Decorative Blurs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 -right-24 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative z-10">
        {/* Status Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-8 transition-all duration-700 delay-100 ${
            isDark
              ? "bg-gray-900/80 border-gray-700 shadow-2xl shadow-blue-500/5"
              : "bg-gray-100 border-gray-300"
          } ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className={`text-xs font-mono font-medium ${subTextColor}`}>
            Available for Engineer roles
          </span>
        </div>

        {/* Main Heading: Focusing on the hybrid strength */}
        <div className="max-w-5xl mb-12">
          <h1
            className={`text-6xl md:text-8xl font-black tracking-tight mb-8 leading-[0.85] transition-all duration-700 delay-200 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            Engineering <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Integrity.
            </span>
          </h1>

          <div
            className={`flex items-center gap-4 transition-all duration-700 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <p
              className={`text-xl md:text-2xl font-light ${subTextColor} max-w-2xl leading-relaxed`}
            >
              I'm{" "}
              <span className={`font-semibold ${textColor}`}>
                Amresh Maurya
              </span>
              , a Backend Engineer with a background in{" "}
              <span className="text-blue-500 font-medium italic underline decoration-blue-500/20">
                Systems Consulting
              </span>{" "}
              and a year of{" "}
              <span className="text-purple-500 font-medium">
                Technical Education
              </span>
              . I build robust APIs and clear documentation.
            </p>
          </div>
        </div>

        {/* Metric Bar: Highlighting your 1+ years of work/teaching */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16 py-10 border-y transition-all duration-1000 delay-500 ${
            isDark ? "border-white/10" : "border-black/5"
          } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          {/* Metric 1: Backend Consulting */}
          <div className="group flex flex-col items-center md:items-start">
            <div className="flex items-baseline gap-1">
              <p className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-b from-blue-400 to-blue-600">
                3+
              </p>
              <span className="text-sm font-bold text-blue-500/50">Mo.</span>
            </div>
            <p
              className={`text-[10px] mt-2 uppercase tracking-[0.3em] font-black ${subTextColor} group-hover:text-blue-500 transition-colors`}
            >
              Systems Consulting
            </p>
            <div className="h-0.5 w-0 group-hover:w-12 bg-blue-500 transition-all duration-500 mt-1" />
          </div>

          {/* Metric 2: Teaching Experience */}
          <div className="group flex flex-col items-center md:items-start">
            <div className="flex items-baseline gap-1">
              <p className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-b from-purple-400 to-purple-600">
                1+
              </p>
              <span className="text-sm font-bold text-purple-500/50">Yr.</span>
            </div>
            <p
              className={`text-[10px] mt-2 uppercase tracking-[0.3em] font-black ${subTextColor} group-hover:text-purple-500 transition-colors`}
            >
              Technical Pedagogy
            </p>
            <div className="h-0.5 w-0 group-hover:w-12 bg-purple-500 transition-all duration-500 mt-1" />
          </div>

          {/* Metric 3: Code Clarity */}
          <div className="group flex flex-col items-center md:items-start">
            <div className="flex items-baseline gap-1">
              <p className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-b from-green-400 to-green-600">
                100%
              </p>
            </div>
            <p
              className={`text-[10px] mt-2 uppercase tracking-[0.3em] font-black ${subTextColor} group-hover:text-green-500 transition-colors`}
            >
              Clarity & Documentation
            </p>
            <div className="h-0.5 w-0 group-hover:w-12 bg-green-500 transition-all duration-500 mt-1" />
          </div>
        </div>

        {/* Action Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-12 gap-4 transition-all duration-700 delay-400 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Main CTA */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <a
              href="https://amreshpro.medium.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-between p-6 rounded-3xl bg-gradient-to-br from-blue-600 to-purple-700 text-white overflow-hidden transition-all hover:shadow-2xl hover:shadow-blue-500/30 active:scale-[0.98]"
            >
              <div className="relative z-10">
                <p className="text-[10px] font-mono opacity-80 mb-1 tracking-widest uppercase">
                  cat ./technical-logs.md
                </p>
                <h3 className="text-2xl font-bold">Read My Articles</h3>
              </div>
              <ExternalLink className="w-8 h-8 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-colors" />
            </a>

            <div className="flex gap-4">
              {[
                { icon: Github, href: "https://github.com/amreshpro" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/amreshpro/",
                },
                { icon: Mail, href: "mailto:amresh.terminal@gmail.com" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className={`flex-1 flex justify-center p-5 border rounded-2xl transition-all hover:-translate-y-2 ${cardBg} ${textColor} hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5`}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Skill/Quote Card */}
          <div
            className={`md:col-span-7 p-8 border rounded-3xl flex flex-col justify-between backdrop-blur-md ${cardBg}`}
          >
            <div className="flex justify-between items-start mb-8">
              <div
                className={`p-3 rounded-xl ${isDark ? "bg-white/5" : "bg-black/5"}`}
              >
                <Terminal className="w-6 h-6 text-blue-500" />
              </div>
              <div className="flex flex-wrap gap-2 justify-end max-w-[200px]">
                {["TypeScript", "Node.js", "PostgreSQL", "React"].map(
                  (tech, i) => (
                    <div
                      key={i}
                      className={`px-3 py-1 text-[10px] font-mono border rounded-full uppercase tracking-tighter ${
                        isDark
                          ? "bg-white/5 border-white/10 text-gray-400"
                          : "bg-black/5 border-black/10 text-gray-600"
                      }`}
                    >
                      {tech}
                    </div>
                  ),
                )}
              </div>
            </div>

            <div>
              <p
                className={`text-xl font-mono mb-4 leading-tight italic ${textColor}`}
              >
                "Any fool can write code that a computer understands. Good
                programmers write code that humans understand."
              </p>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-1">
                  <div className="w-4 h-4 rounded-full bg-blue-500" />
                  <div className="w-4 h-4 rounded-full bg-purple-500" />
                </div>
                <span
                  className={`text-[10px] uppercase tracking-[0.25em] font-black ${subTextColor}`}
                >
                  Technical Educator & Consultant
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

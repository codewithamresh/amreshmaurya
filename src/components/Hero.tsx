import { ArrowRight, Github, Linkedin, Mail, Terminal, Database, Server, Coffee, Cloud } from "lucide-react";

interface HeroProps {
  isDark: boolean;
  isVisible: boolean;
}

// ─────────────────────────────────────────────
// New 5-color system
// ink    #0C1222  — dark bg / light-mode text
// paper  #F8FAFC  — light bg / dark-mode text
// accent #0EA5E9  — sky-500 (CTAs, links, prompts)
// muted  #64748B  — secondary text / borders
// signal #22C55E  — live status + success
// ─────────────────────────────────────────────

const stack = [
  { icon: Coffee, label: "Java" },
  { icon: Server, label: "Spring Boot" },
  { icon: Database, label: "PostgreSQL" },
  { icon: Cloud, label: "AWS" },
];

export const Hero = ({ isDark, isVisible }: HeroProps) => {
  const bg = isDark ? "bg-[#0C1222]" : "bg-[#F8FAFC]";
  const textPrimary = isDark ? "text-white" : "text-[#0C1222]";
  const textMuted = isDark ? "text-[#94A3B8]" : "text-[#64748B]";
  const border = isDark ? "border-[#1E293B]" : "border-[#E2E8F0]";
  const badgeBg = isDark ? "bg-[#1E293B]" : "bg-white";
  const panelBg = isDark ? "bg-[#111827]" : "bg-white";
  const accent = "text-[#0EA5E9]";

  return (
    <section className={`relative min-h-screen ${bg} transition-colors duration-300`}>
      <div
        className={`mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center gap-14 px-6 py-20 transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"
          }`}
      >
        {/* Top — Status + Heading block (centered) */}
        <div className="flex w-full max-w-3xl flex-col items-center text-center">
          {/* Status badge */}
          <div className={`mb-8 inline-flex items-center gap-2.5 rounded-full border ${border} ${badgeBg} px-4 py-1.5 shadow-sm`}>
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22C55E] opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#22C55E]" />
            </span>
            <span className={`text-sm font-medium ${textMuted}`}>
              Open for backend engineering roles
            </span>
          </div>

          {/* Heading */}
          <h1 className={`text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl ${textPrimary}`}>
            Building reliable
            <br />
            <span className={accent}>backend systems.</span>
          </h1>

          {/* Subtitle */}
          <p className={`mt-7 max-w-2xl text-lg leading-8 md:text-xl ${textMuted}`}>
            I'm <span className={`font-semibold ${textPrimary}`}>Amresh Maurya</span>, a Java
            backend developer building scalable REST APIs, secure auth systems,
            payment solutions, and clean architecture with Java, Spring Boot,
            PostgreSQL, Docker, and AWS.
          </p>
        </div>

        {/* Middle — Tech stack + CTAs */}
        <div className="flex w-full max-w-3xl flex-col items-center gap-8">
          {/* Tech stack */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {stack.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className={`inline-flex items-center gap-1.5 rounded-lg border ${border} ${badgeBg} px-3.5 py-1.5 text-sm font-medium ${textMuted} shadow-sm`}
              >
                <Icon className="h-3.5 w-3.5" />
                {label}
              </span>
            ))}
          </div>

          {/* CTAs + Social */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#projects">
              <button className="group flex items-center gap-2 rounded-xl bg-[#0EA5E9] px-6 py-3.5 font-semibold text-white shadow-sm transition-all duration-200 hover:scale-[1.03] hover:bg-[#0284C7] active:scale-[0.98]">


                View projects
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </a>

            {/* <button
              className={`rounded-xl border-2 ${border} px-6 py-3.5 font-semibold ${textPrimary} transition-colors duration-200 ${
                isDark ? "hover:bg-[#1E293B]" : "hover:bg-white"
              }`}
            >
              Download resume
            </button> */}

            <div className="flex items-center gap-1.5">
              {[Github, Linkedin, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className={`rounded-lg border ${border} p-2.5 ${textMuted} transition-colors duration-200 ${isDark
                      ? "hover:bg-[#1E293B] hover:text-white"
                      : "hover:bg-white hover:text-[#0C1222]"
                    }`}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom — Terminal mockup (full width, more prominent) */}
        <div className={`w-full max-w-3xl overflow-hidden rounded-2xl border-2 ${border} ${panelBg} shadow-lg`}>
          <div className={`flex items-center gap-2 border-b ${border} px-4 py-3`}>
            <Terminal className={`h-4 w-4 ${textMuted}`} />
            <span className={`text-xs font-semibold ${textMuted}`}>backend.jar — bash</span>
          </div>
          <div className="p-5 font-mono text-[13px] leading-7 sm:text-sm">
            <p className={textMuted}>
              <span className="font-bold text-[#0EA5E9]">$</span> java -jar backend.jar
            </p>
            <p className={textMuted}>Starting BackendApplication ...</p>
            <p className={textMuted}>Loading Spring context ...</p>
            <p className={textMuted}>
              Connecting to PostgreSQL ...{" "}
              <span className="font-semibold text-[#22C55E]">connected</span>
            </p>
            <p className={textMuted}>Registering REST endpoints ...</p>
            <p className={`${textPrimary} font-semibold`}>
              Server started on port <span className="text-[#0EA5E9]">8080</span>{" "}
              <span className="text-[#22C55E]">✓</span>
            </p>
            <p className={`mt-2 ${textMuted}`}>
              <span className="font-bold text-[#0EA5E9]">$</span>{" "}
              <span className="animate-pulse">_</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
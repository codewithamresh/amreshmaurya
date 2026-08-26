import { BsArrowUpRight, BsGithub, BsLinkedin, BsMailbox } from "react-icons/bs";
import { SiConcourse } from "react-icons/si";

// 1. Theme Configuration Object (Easily customizable & scalable)
const STYLES = {
  card: "bg-white/80 dark:bg-slate-900/90 border-slate-200/60 dark:border-slate-800 shadow-slate-200/50 dark:shadow-none",
  textPrimary: "text-slate-900 dark:text-white",
  textSecondary: "text-slate-600 dark:text-slate-400",
  badge: "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/50",
  iconBtn: "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700",
  ctaBtn: "bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100",
};

const ProfileHero = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 font-sans">
      <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-10 p-8 rounded-3xl backdrop-blur-xl border shadow-xl transition-colors duration-300 ${STYLES.card}`}>

        {/* Profile Image with Ring Effect */}
        <div className="relative group">
          <div className="absolute -inset-1  rounded-full blur opacity-25 group-hover:opacity-60 transition duration-300"></div>
          <div className="relative w-70 h-70 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-inner flex-shrink-0">
            <img
              src="/amresh.png"
              alt="Amresh Maurya"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Text Details */}
        <div className="flex-1 text-center md:text-left space-y-4">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border ${STYLES.badge}`}>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Available for hire
          </div>

          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight ${STYLES.textPrimary}`}>
            Hey <span className="inline-block animate-bounce">👋</span>, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Amresh Maurya
            </span>
          </h1>

          <p className={`text-base sm:text-lg leading-relaxed max-w-xl ${STYLES.textSecondary}`}>
            I’m a full-stack developer passionate about building modern, scalable web applications. I enjoy solving complex problems, writing clean code, and turning ideas into reliable, user-focused digital experiences.

          </p>

          {/* Action Links & Social Icons */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
            <a
              href="mailto:amresh.terminal@gmail.com"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-colors shadow-md ${STYLES.ctaBtn}`}
            >
              Get in touch
              <BsArrowUpRight size={16} />
            </a>

            <div className="flex items-center space-x-2">
              <a
                href="https://github.com/amreshcraft"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className={`p-2.5 rounded-xl transition-colors ${STYLES.iconBtn}`}
              >
                <BsGithub size={18} />
              </a>
              <a
                href="https://topmate.io/amreshpro"
                aria-label="Email Me"
                className={`p-2.5 rounded-xl transition-colors ${STYLES.iconBtn}`}
              >
                <SiConcourse size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className={`p-2.5 rounded-xl transition-colors ${STYLES.iconBtn}`}
              >
                <BsLinkedin size={18} />
              </a>

              <a
                href="mailto:amresh.terminal@gmail.com"
                aria-label="Email Me"
                className={`p-2.5 rounded-xl transition-colors ${STYLES.iconBtn}`}
              >
                <BsMailbox size={18} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProfileHero;
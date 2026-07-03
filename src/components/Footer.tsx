import { Github, Linkedin, Mail, Heart, ArrowUp, Command } from "lucide-react";

interface FooterProps {
  isDark: boolean;
}

const SocialMediaList = [
  { icon: Github, href: "https://github.com/amreshcraft" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/amreshpro/" },
  { icon: Mail, href: "mailto:amresh.terminal@gmail.com" },
];

export const Footer = ({ isDark }: FooterProps) => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const textClass = isDark ? "text-gray-400" : "text-gray-600";
  const headingClass = isDark ? "text-white" : "text-gray-900";
  const borderClass = isDark ? "border-gray-800" : "border-gray-200";

  return (
    <footer className={`relative mt-20 pb-12 border-t ${borderClass}`}>
      {/* Scroll to top floating button - purely for UX */}
      <button
        onClick={scrollToTop}
        className={`absolute -top-6 left-1/2 -translate-x-1/2 p-3 rounded-full border shadow-xl transition-all hover:-translate-y-1 active:scale-95 ${isDark
            ? "bg-gray-900 border-gray-700 text-white"
            : "bg-white border-gray-200 text-gray-900"
          }`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      <div className="pt-20 grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {/* Brand/Bio Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
            <div className="w-8 h-8 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white text-sm">
              AM
            </div>
            <span className={headingClass}>Amresh Maurya</span>
          </div>
          <p className={`${textClass} text-sm leading-relaxed max-w-xs`}>
            Building reliable backend applications with Java, Spring Boot, SQL, and clean software design.
          </p>
        </div>

        {/* Quick Links / Socials */}
        <div className="flex flex-col gap-4">
          <h4
            className={`text-xs font-bold uppercase tracking-[0.2em] ${isDark ? "text-gray-500" : "text-gray-400"}`}
          >
            Social Connections
          </h4>
          <div className="flex flex-wrap gap-3">
            {SocialMediaList.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                className={`p-3 rounded-xl border transition-all hover:scale-110 ${isDark
                    ? "bg-gray-900/50 border-gray-800 hover:border-blue-500/50 text-gray-400 hover:text-white"
                    : "bg-gray-50 border-gray-200 hover:border-blue-500/50 text-gray-600 hover:text-black"
                  }`}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* System Status / Availability */}
        <div
          className={`p-6 rounded-2xl border ${isDark ? "bg-blue-500/5 border-blue-500/20" : "bg-blue-50 border-blue-100"}`}
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span
              className={`text-xs font-bold uppercase tracking-widest ${isDark ? "text-blue-400" : "text-blue-600"}`}
            >
              Current Status
            </span>
          </div>
          <p className={`text-sm font-medium ${headingClass}`}>
            Open for freelance projects and full-time opportunities.
          </p>
          <a
            href="mailto:amresh.terminal@gmail.com"
            className="mt-4 inline-block text-sm font-bold underline decoration-2 underline-offset-4 hover:text-blue-500 transition-colors"
          >
            Drop me a line →
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className={`mt-20 pt-8 border-t ${borderClass} flex flex-col md:flex-row justify-between items-center gap-6`}
      >
        <div
          className={`flex items-center gap-2 font-mono text-xs ${textClass}`}
        >
          <Command className="w-3 h-3" />
          <span>v2026.1.0 — Deployed successfully</span>
        </div>

        <div
          className={`flex items-center gap-1.5 text-sm font-medium ${textClass}`}
        >
          <span>Built with</span>
          <Heart className="w-4 h-4 text-red-500 fill-current" />
          <span>using React & Tailwind</span>
        </div>

        <p className={`text-xs font-mono ${textClass}`}>
          © {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

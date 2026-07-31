import { Github, Linkedin, Mail, ArrowUp, Command } from "lucide-react";

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

  const textPrimary = isDark ? "text-[#FAFAFA]" : "text-[#0F172A]";
  const textMuted = isDark ? "text-[#A1A1AA]" : "text-[#71717A]";
  const border = isDark ? "border-[#27272A]" : "border-[#E4E4E7]";
  const cardBg = isDark ? "bg-[#18181B]" : "bg-white";
  const badgeBg = isDark ? "bg-[#27272A]" : "bg-[#F4F4F5]";

  return (
    <footer className={`relative mt-16 border-t pb-12 ${border}`}>
      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className={`absolute -top-5 left-1/2 -translate-x-1/2 rounded-full border p-3 shadow-lg transition-all hover:-translate-y-1 active:scale-95 ${border} ${cardBg} ${textPrimary}`}
      >
        <ArrowUp className="h-4 w-4" />
      </button>

      <div className="grid grid-cols-1 items-start gap-12 pt-16 md:grid-cols-3">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#4F46E5] text-sm font-bold text-white">
              AM
            </div>
            <span className={`text-lg font-bold tracking-tight ${textPrimary}`}>
              Amresh Maurya
            </span>
          </div>
          <p className={`max-w-xs text-sm leading-relaxed ${textMuted}`}>
            Building reliable backend applications with Java, Spring Boot, SQL,
            and clean software design.
          </p>
        </div>

        {/* Socials */}
        <div className="flex flex-col gap-4">
          <h4 className={`text-xs font-semibold uppercase tracking-[0.2em] ${textMuted}`}>
            Social Connections
          </h4>
          <div className="flex flex-wrap gap-2.5">
            {SocialMediaList.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-xl border p-3 transition-all hover:scale-110 ${border} ${badgeBg} ${textMuted} hover:border-[#4F46E5]/40 hover:text-[#4F46E5]`}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Status Card */}
        <div className={`rounded-2xl border p-5 ${border} ${cardBg}`}>
          <div className="mb-2 flex items-center gap-2">
            <div className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#14B8A6] opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#14B8A6]" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#14B8A6]">
              Current Status
            </span>
          </div>
          <p className={`text-sm font-medium ${textPrimary}`}>
            Open for freelance projects and full-time opportunities.
          </p>
          <a
            href="mailto:amresh.terminal@gmail.com"
            className="mt-3 inline-block text-sm font-semibold text-[#4F46E5] underline decoration-2 underline-offset-4 transition-colors hover:opacity-80"
          >
            Drop me a line →
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className={`mt-16 flex flex-col items-center justify-between gap-5 border-t pt-8 md:flex-row ${border}`}
      >
        <div className={`flex items-center gap-2 font-mono text-xs ${textMuted}`}>
          <Command className="h-3 w-3" />
          <span>v2026.1.0 — Deployed successfully</span>
        </div>

        <p className={`text-sm ${textMuted}`}>
          Built with React & Tailwind
        </p>

        <p className={`font-mono text-xs ${textMuted}`}>
          © {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
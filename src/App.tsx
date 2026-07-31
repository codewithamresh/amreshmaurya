import { useState, useEffect } from "react";
import { ThemeToggle } from "./components/ThemeToggle";
import { Hero } from "./components/Hero";
import { Blog } from "./components/Blog";
import { Footer } from "./components/Footer";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

// ─────────────────────────────────────────────
// 5-color system — used everywhere
// ink    #0F172A   dark surface / dark text
// paper  #FAFAFA   light surface / light text
// accent #4F46E5   CTAs, links, cursor glow
// muted  #71717A   secondary text, borders, grid
// signal #14B8A6   status only
// ─────────────────────────────────────────────

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 40);

    const handleMouseMove = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const bgClass = isDark ? "bg-[#0F172A]" : "bg-[#FAFAFA]";
  const textClass = isDark ? "text-[#FAFAFA]" : "text-[#0F172A]";

  return (
    <div
      className={`relative min-h-screen overflow-x-hidden ${bgClass} ${textClass} transition-colors duration-500`}
    >
      {/* Cursor glow */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `radial-gradient(
            700px circle at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(79, 70, 229, ${isDark ? 0.13 : 0.07}),
            transparent 50%
          )`,
          transform: `translateY(${scrollY * 0.35}px)`,
        }}
      />

      {/* Subtle grid */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(113, 113, 122, ${isDark ? 0.07 : 0.05}) 1px, transparent 1px),
            linear-gradient(90deg, rgba(113, 113, 122, ${isDark ? 0.07 : 0.05}) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Soft vignette */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `linear-gradient(
            to bottom,
            transparent 0%,
            transparent 60%,
            rgba(15, 23, 42, ${isDark ? 0.45 : 0.04}) 100%
          )`,
        }}
      />

      {/* Theme toggle */}
      <ThemeToggle isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />

      {/* Main content */}
      <main className="relative z-10 mx-auto max-w-5xl px-6 pb-24 pt-16 sm:px-8">
        <Hero isDark={isDark} isVisible={isVisible} />
        <Projects isDark={isDark} isVisible={isVisible} />
        <Blog isDark={isDark} isVisible={isVisible} />
        <Skills isDark={isDark} isVisible={isVisible} />
        <Footer isDark={isDark} />
      </main>
    </div>
  );
}

export default App;
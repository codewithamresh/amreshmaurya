import { useState, useEffect } from "react";
import { ThemeToggle } from "./components/ThemeToggle";
import { Hero } from "./components/Hero";
import { Blog } from "./components/Blog";
import { Footer } from "./components/Footer";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50);

    const handleMouseMove = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const bgClass = isDark ? "bg-[#0b0f19]" : "bg-[#f8fafc]";
  const textClass = isDark ? "text-slate-100" : "text-slate-900";

  return (
    <div
      className={`min-h-screen ${bgClass} ${textClass} transition-colors duration-500 overflow-hidden relative`}
    >
      {/* Soft animated glow */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: isDark
            ? `radial-gradient(
                800px circle at ${mousePosition.x}px ${mousePosition.y}px,
                rgba(99,102,241,0.12),
                transparent 45%
              )`
            : `radial-gradient(
                800px circle at ${mousePosition.x}px ${mousePosition.y}px,
                rgba(59,130,246,0.15),
                transparent 50%
              )`,
          transform: `translateY(${scrollY * 0.4}px)`,
        }}
      />

      {/* Subtle grid */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: isDark
            ? `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
               linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`
            : `linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
               linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Vignette for depth */}
      <div className="fixed inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-black/40 dark:to-black/60" />

      <ThemeToggle isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <Hero isDark={isDark} isVisible={isVisible} />
        <Projects isDark={isDark} isVisible={isVisible} />
        <Blog isDark={isDark} isVisible={isVisible} />
        <Skills isDark={isDark} isVisible={isVisible} />
        <Footer isDark={isDark} />
      </div>

      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default App;

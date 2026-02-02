import { useState, useEffect } from 'react';
import { ThemeToggle } from './components/ThemeToggle';
import { Hero } from './components/Hero';
import { Blog } from './components/Blog';
import { Footer } from './components/Footer';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';


function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [scrollY, setScrollY] = useState(0);


 
  useEffect(() => {
  // Delay the visibility state to allow initial render to complete
  const timer = setTimeout(() => setIsVisible(true), 50);
  
   const handleMouseMove = (e: MouseEvent) => {
    requestAnimationFrame(() => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    });
  };
  
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };
  
  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('scroll', handleScroll);
  
  return () => {
    clearTimeout(timer);
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  const bgClass = isDark ? 'bg-black' : 'bg-gray-50';
  const textClass = isDark ? 'text-white' : 'text-gray-900';

  return (
    <div
      className={`min-h-screen ${bgClass} ${textClass} transition-colors duration-500 overflow-hidden`}
    >
      {/* Animated gradient background */}
      <div
        className="fixed inset-0 opacity-20 pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${
            isDark ? 'rgba(59, 130, 246, 0.15)' : 'rgba(59, 130, 246, 0.1)'
          }, transparent 40%)`,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />

      {/* Grid overlay */}
      <div
        className={`fixed inset-0 ${
          isDark ? 'opacity-5' : 'opacity-10'
        } pointer-events-none transition-opacity duration-500`}
        style={{
          backgroundImage: `linear-gradient(${
            isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'
          } 1px, transparent 1px), linear-gradient(90deg, ${
            isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'
          } 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <ThemeToggle isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <Hero isDark={isDark} isVisible={isVisible} />
        {/* <TechStack isDark={isDark} isVisible={isVisible} /> */}
         <Skills isDark={isDark} isVisible={isVisible} />
        <Projects isDark={isDark} isVisible={isVisible} />
        <Blog isDark={isDark} isVisible={isVisible} />
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
# Portfolio Project Setup - Vite + React + TypeScript + Tailwind

## Step 1: Create Vite Project

```bash
npm create vite@latest portfolio -- --template react-ts
cd portfolio
npm install
```

## Step 2: Install Dependencies

```bash
npm install lucide-react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## Step 3: Configure Tailwind CSS

**tailwind.config.js**

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

**src/index.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Step 4: Project Structure

```
src/
├── components/
│   ├── Hero.tsx
│   ├── TechStack.tsx
│   ├── Projects.tsx
│   ├── Blog.tsx
│   ├── Footer.tsx
│   └── ThemeToggle.tsx
├── types/
│   └── index.ts
├── data/
│   └── portfolio.ts
├── App.tsx
├── index.css
└── main.tsx
```

## Step 5: Create Files

### src/types/index.ts

```typescript
export interface Project {
  name: string;
  description: string;
  stars: number;
  tech: string;
  link: string;
}

export interface BlogPost {
  title: string;
  date: string;
  description: string;
  link: string;
}

export interface TechStack {
  frontend: string[];
  backend: string[];
  database: string[];
  tools: string[];
}
```

### src/data/portfolio.ts

```typescript
import { TechStack, Project, BlogPost } from "../types";

export const techIcons: Record<string, string> = {
  React: "⚛️",
  "Next.js": "▲",
  TypeScript: "TS",
  "Tailwind CSS": "🎨",
  Redux: "🔄",
  "Express.js": "🚂",
  "Spring Boot": "🍃",
  "Node.js": "🟢",
  Java: "☕",
  MySQL: "🐬",
  PostgreSQL: "🐘",
  MongoDB: "🍃",
  Oracle: "🔴",
  Git: "📦",
  Docker: "🐳",
  AWS: "☁️",
  Linux: "🐧",
};

export const techStack: TechStack = {
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
  backend: ["Express.js", "Spring Boot", "Node.js", "Java"],
  database: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
  tools: ["Git", "Docker", "AWS", "Linux"],
};

export const projects: Project[] = [
  {
    name: "zsh-theme",
    description:
      "oh-my-zsh terminal theme to increase productivity during coding",
    stars: 24,
    tech: "Shell",
    link: "https://github.com/amreshpro/zsh-theme",
  },
  {
    name: "filmiflix",
    description:
      "Movie website showing cast, director, and videos of searched movies",
    stars: 3,
    tech: "TypeScript",
    link: "https://github.com/amreshpro/filmiflix",
  },
  {
    name: "blogjs",
    description: "Blog application built with Express.js",
    stars: 1,
    tech: "TypeScript",
    link: "https://github.com/amreshpro/blogjs",
  },
];

export const blogPosts: BlogPost[] = [
  {
    title: "JavaScript Best Practices",
    date: "2024",
    description: "Essential scripting language for the web",
    link: "https://amreshpro.medium.com",
  },
  {
    title: "Building with React & Express",
    date: "2024",
    description: "Full stack development insights",
    link: "https://amreshpro.medium.com",
  },
  {
    title: "Terminal Productivity Tips",
    date: "2024",
    description: "Enhance your development workflow",
    link: "https://amreshpro.medium.com",
  },
];
```

### src/components/ThemeToggle.tsx

```typescript
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const ThemeToggle = ({ isDark, toggleTheme }: ThemeToggleProps) => {
  return (
    <button
      onClick={toggleTheme}
      className={`fixed top-8 right-8 z-50 p-4 rounded-full ${
        isDark ? 'bg-gray-800' : 'bg-white'
      } shadow-lg hover:border-blue-500 border ${
        isDark ? 'border-gray-700' : 'border-gray-300'
      } transition-all duration-300 hover:scale-110`}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="w-6 h-6 text-yellow-400" />
      ) : (
        <Moon className="w-6 h-6 text-blue-600" />
      )}
    </button>
  );
};
```

### src/components/Hero.tsx

```typescript
import { Github, Linkedin, Mail, ExternalLink, Terminal } from 'lucide-react';

interface HeroProps {
  isDark: boolean;
  isVisible: boolean;
}

export const Hero = ({ isDark, isVisible }: HeroProps) => {
  const subTextClass = isDark ? 'text-gray-400' : 'text-gray-600';

  return (
    <section
      className={`mb-32 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="mb-8">
        <div className="inline-block">
          <h1
            className={`text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent ${
              isVisible ? 'animate-pulse' : ''
            }`}
          >
            Amresh Maurya
          </h1>
          <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
        </div>
      </div>

      <p
        className={`text-2xl ${subTextClass} mb-2 transition-all duration-300 ${
          isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
        }`}
        style={{ transitionDelay: '200ms' }}
      >
        Full Stack Developer
      </p>
      <p
        className={`text-xl ${
          isDark ? 'text-gray-500' : 'text-gray-500'
        } mb-8 font-mono transition-all duration-300 ${
          isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
        }`}
        style={{ transitionDelay: '300ms' }}
      >
        📍 Rohtak, Haryana, India
      </p>

      <p
        className={`text-lg ${subTextClass} max-w-2xl mb-8 leading-relaxed transition-all duration-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
        style={{ transitionDelay: '400ms' }}
      >
        Passionate software engineer specializing in modern web technologies.
        Building scalable applications with React, Next.js, Express, and Spring Boot.
      </p>

      <div
        className={`flex flex-wrap gap-4 mb-8 transition-all duration-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
        style={{ transitionDelay: '500ms' }}
      >
        <a
          href="https://github.com/amreshpro"
          target="_blank"
          rel="noopener noreferrer"
          className={`p-3 ${
            isDark ? 'bg-gray-900 hover:bg-gray-800' : 'bg-white hover:bg-gray-100'
          } rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg ${
            isDark ? 'hover:shadow-blue-500/50' : 'hover:shadow-blue-400/30'
          } border ${isDark ? 'border-gray-700' : 'border-gray-300'}`}
        >
          <Github className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/amreshpro/"
          target="_blank"
          rel="noopener noreferrer"
          className={`p-3 ${
            isDark ? 'bg-gray-900 hover:bg-gray-800' : 'bg-white hover:bg-gray-100'
          } rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg ${
            isDark ? 'hover:shadow-blue-500/50' : 'hover:shadow-blue-400/30'
          } border ${isDark ? 'border-gray-700' : 'border-gray-300'}`}
        >
          <Linkedin className="w-6 h-6" />
        </a>
        <a
          href="mailto:amresh.terminal@gmail.com"
          className={`p-3 ${
            isDark ? 'bg-gray-900 hover:bg-gray-800' : 'bg-white hover:bg-gray-100'
          } rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg ${
            isDark ? 'hover:shadow-blue-500/50' : 'hover:shadow-blue-400/30'
          } border ${isDark ? 'border-gray-700' : 'border-gray-300'}`}
        >
          <Mail className="w-6 h-6" />
        </a>
        <a
          href="https://amreshpro.medium.com"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-lg transition-all duration-300 hover:scale-105 flex items-center gap-2 text-white"
        >
          Read Blog <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      <div
        className={`text-sm ${
          isDark ? 'text-gray-500' : 'text-gray-500'
        } font-mono transition-all duration-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
        style={{ transitionDelay: '600ms' }}
      >
        <Terminal className="inline w-4 h-4 mr-2" />
        "When in doubt, use brute force."
      </div>
    </section>
  );
};
```

### src/components/TechStack.tsx

```typescript
import { Code2, Database, Terminal, ExternalLink } from 'lucide-react';
import { techStack, techIcons } from '../data/portfolio';

interface TechStackProps {
  isDark: boolean;
  isVisible: boolean;
}

export const TechStack = ({ isDark, isVisible }: TechStackProps) => {
  const textClass = isDark ? 'text-white' : 'text-gray-900';
  const cardBgClass = isDark ? 'from-gray-900 to-gray-800' : 'from-white to-gray-100';
  const borderClass = isDark ? 'border-gray-700' : 'border-gray-300';
  const hoverBorderClass = isDark ? 'hover:border-blue-500' : 'hover:border-blue-400';

  return (
    <section
      className={`mb-32 transition-all duration-1000 delay-200 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <h2 className={`text-3xl font-bold mb-8 flex items-center gap-3 ${textClass}`}>
        <Code2 className="text-blue-400" />
        Tech Stack
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {Object.entries(techStack).map(([category, techs], idx) => (
          <div
            key={category}
            className={`p-6 bg-gradient-to-br ${cardBgClass} rounded-xl border ${borderClass} ${hoverBorderClass} transition-all duration-300 group hover:shadow-xl ${
              isDark ? 'hover:shadow-blue-500/20' : 'hover:shadow-blue-400/20'
            } hover:scale-[1.02]`}
            style={{
              transitionDelay: `${idx * 100}ms`,
              animation: isVisible
                ? `slideInUp 0.6s ease-out ${idx * 100}ms both`
                : 'none',
            }}
          >
            <div className="flex items-center gap-2 mb-4">
              {category === 'frontend' && <Code2 className="text-blue-400 w-5 h-5" />}
              {category === 'backend' && <Terminal className="text-green-400 w-5 h-5" />}
              {category === 'database' && <Database className="text-purple-400 w-5 h-5" />}
              {category === 'tools' && <ExternalLink className="text-orange-400 w-5 h-5" />}
              <h3 className={`text-xl font-semibold capitalize ${textClass}`}>
                {category}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {techs.map((tech) => (
                <span
                  key={tech}
                  className={`px-3 py-1 ${
                    isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'
                  } rounded-full text-sm border ${borderClass} ${hoverBorderClass} transition-all duration-300 hover:scale-110 flex items-center gap-1.5`}
                >
                  <span className="text-base">{techIcons[tech]}</span>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
```

### src/components/Projects.tsx

```typescript
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/portfolio';

interface ProjectsProps {
  isDark: boolean;
  isVisible: boolean;
}

export const Projects = ({ isDark, isVisible }: ProjectsProps) => {
  const textClass = isDark ? 'text-white' : 'text-gray-900';
  const subTextClass = isDark ? 'text-gray-400' : 'text-gray-600';
  const cardBgClass = isDark ? 'from-gray-900 to-gray-800' : 'from-white to-gray-100';
  const borderClass = isDark ? 'border-gray-700' : 'border-gray-300';

  return (
    <section
      className={`mb-32 transition-all duration-1000 delay-400 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <h2 className={`text-3xl font-bold mb-8 flex items-center gap-3 ${textClass}`}>
        <Github className="text-purple-400" />
        Featured Projects
      </h2>

      <div className="grid gap-6">
        {projects.map((project, idx) => (
          <a
            key={project.name}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group p-6 bg-gradient-to-br ${cardBgClass} rounded-xl border ${borderClass} hover:border-purple-500 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${
              isDark ? 'hover:shadow-purple-500/20' : 'hover:shadow-purple-400/20'
            }`}
            style={{
              transitionDelay: `${idx * 100}ms`,
              animation: isVisible
                ? `slideInUp 0.6s ease-out ${(idx + 4) * 100}ms both`
                : 'none',
            }}
          >
            <div className="flex items-start justify-between mb-3">
              <h3
                className={`text-2xl font-bold ${textClass} group-hover:text-purple-400 transition-colors`}
              >
                {project.name}
              </h3>
              <div className="flex items-center gap-3">
                <span className={`flex items-center gap-1 ${subTextClass}`}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {project.stars}
                </span>
                <ExternalLink
                  className={`w-5 h-5 ${subTextClass} group-hover:text-purple-400 transition-colors`}
                />
              </div>
            </div>
            <p className={`${subTextClass} mb-3`}>{project.description}</p>
            <span
              className={`inline-block px-3 py-1 ${
                isDark
                  ? 'bg-blue-900/30 text-blue-400 border-blue-500/30'
                  : 'bg-blue-100 text-blue-600 border-blue-400/50'
              } rounded-full text-sm border`}
            >
              {project.tech}
            </span>
          </a>
        ))}
      </div>

      <a
        href="https://github.com/amreshpro?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-8 inline-flex items-center gap-2 px-6 py-3 ${
          isDark ? 'bg-gray-900 hover:bg-gray-800' : 'bg-white hover:bg-gray-100'
        } rounded-lg transition-all duration-300 hover:scale-105 border ${borderClass} hover:border-blue-400 hover:shadow-lg`}
      >
        View all 57 repositories <ExternalLink className="w-4 h-4" />
      </a>
    </section>
  );
};
```

### src/components/Blog.tsx

```typescript
import { BookOpen, Calendar, ExternalLink } from 'lucide-react';
import { blogPosts } from '../data/portfolio';

interface BlogProps {
  isDark: boolean;
  isVisible: boolean;
}

export const Blog = ({ isDark, isVisible }: BlogProps) => {
  const textClass = isDark ? 'text-white' : 'text-gray-900';
  const subTextClass = isDark ? 'text-gray-400' : 'text-gray-600';
  const cardBgClass = isDark ? 'from-gray-900 to-gray-800' : 'from-white to-gray-100';
  const borderClass = isDark ? 'border-gray-700' : 'border-gray-300';

  return (
    <section
      className={`mb-32 transition-all duration-1000 delay-600 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <h2 className={`text-3xl font-bold mb-8 flex items-center gap-3 ${textClass}`}>
        <BookOpen className="text-green-400" />
        Latest from Blog
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {blogPosts.map((post, idx) => (
          <a
            key={post.title}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group p-6 bg-gradient-to-br ${cardBgClass} rounded-xl border ${borderClass} hover:border-green-500 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
              isDark ? 'hover:shadow-green-500/20' : 'hover:shadow-green-400/20'
            }`}
            style={{
              transitionDelay: `${idx * 100}ms`,
              animation: isVisible
                ? `slideInUp 0.6s ease-out ${(idx + 7) * 100}ms both`
                : 'none',
            }}
          >
            <div
              className={`flex items-center gap-2 mb-3 text-sm ${
                isDark ? 'text-gray-500' : 'text-gray-500'
              }`}
            >
              <Calendar className="w-4 h-4" />
              {post.date}
            </div>
            <h3
              className={`text-xl font-bold mb-2 ${textClass} group-hover:text-green-400 transition-colors`}
            >
              {post.title}
            </h3>
            <p className={`${subTextClass} text-sm mb-4`}>{post.description}</p>
            <span className="text-green-400 text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
              Read more <ExternalLink className="w-3 h-3" />
            </span>
          </a>
        ))}
      </div>

      <a
        href="https://amreshpro.medium.com"
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-8 inline-flex items-center gap-2 px-6 py-3 ${
          isDark ? 'bg-gray-900 hover:bg-gray-800' : 'bg-white hover:bg-gray-100'
        } rounded-lg transition-all duration-300 hover:scale-105 border ${borderClass} hover:border-blue-400 hover:shadow-lg`}
      >
        View all articles <ExternalLink className="w-4 h-4" />
      </a>
    </section>
  );
};
```

### src/components/Footer.tsx

```typescript
interface FooterProps {
  isDark: boolean;
}

export const Footer = ({ isDark }: FooterProps) => {
  return (
    <footer
      className={`text-center ${
        isDark ? 'text-gray-500' : 'text-gray-500'
      } pt-12 border-t ${isDark ? 'border-gray-800' : 'border-gray-300'}`}
    >
      <p className="font-mono">Built with React • Designed with passion</p>
      <p className="text-sm mt-2">© 2026 Amresh Maurya</p>
    </footer>
  );
};
```

### src/App.tsx

```typescript
import { useState, useEffect } from 'react';
import { ThemeToggle } from './components/ThemeToggle';
import { Hero } from './components/Hero';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { Blog } from './components/Blog';
import { Footer } from './components/Footer';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
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
        <TechStack isDark={isDark} isVisible={isVisible} />
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
```

### src/main.tsx

```typescript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

## Step 6: Run the Project

```bash
npm run dev
```

## Step 7: Build for Production

```bash
npm run build
npm run preview
```

Your portfolio will be ready at `http://localhost:5173`

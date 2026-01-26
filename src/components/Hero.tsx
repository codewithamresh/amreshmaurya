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
      India
      </p>

      <p
        className={`text-lg ${subTextClass} max-w-2xl mb-8 leading-relaxed transition-all duration-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
        style={{ transitionDelay: '400ms' }}
      >
        Passionate software engineer specializing in modern web technologies.
        Building scalable applications with React, Express, and Spring Boot.
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
import { BookOpen, Calendar, ExternalLink } from 'lucide-react';
import { blogPosts } from '../data/portfolio';
import type{BlogPost } from '../types/index'

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
        {blogPosts.map((post : BlogPost, idx) => (
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
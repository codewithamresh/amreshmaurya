import { BookOpen, Calendar, ArrowUpRight, ChevronRight } from "lucide-react";
import { blogPosts } from "../data/portfolio";
import type { BlogPost } from "../types/index";

interface BlogProps {
  isDark: boolean;
  isVisible: boolean;
}

export const Blog = ({ isDark, isVisible }: BlogProps) => {
  const textClass = isDark ? "text-white" : "text-slate-900";
  const subTextClass = isDark ? "text-slate-400" : "text-slate-500";

  return (
    <section
      id="journal"
      className={`py-24 px-4 max-w-7xl mx-auto transition-all duration-1000 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      {/* --- Section Header --- */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="relative">
          <div className="flex items-center gap-2 mb-2">
            <div className="h-1 w-8 bg-emerald-500 rounded-full" />
            <span className="text-emerald-500 font-mono text-sm tracking-tighter uppercase font-bold">
              Insights & Articles
            </span>
          </div>
          <h2
            className={`text-5xl md:text-6xl font-black tracking-tight ${textClass}`}
          >
            The Journal<span className="text-emerald-500">.</span>
          </h2>
        </div>

        <p className={`max-w-md ${subTextClass} text-lg leading-relaxed`}>
          Documenting my process, deep-dives into JavaScript internals, and the
          evolving landscape of full-stack engineering.
        </p>
      </div>

      {/* --- Bento Grid --- */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {blogPosts.map((post: BlogPost, idx) => {
          const isMain = idx === 0;

          return (
            <a
              key={post.title}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] p-8 md:p-10 transition-all duration-700
                ${isMain ? "md:col-span-8 min-h-[500px]" : "md:col-span-4 min-h-[350px]"} 
                ${
                  isDark
                    ? "bg-slate-900/50 border border-slate-800 hover:border-emerald-500/50"
                    : "bg-white border border-slate-100 hover:border-emerald-200 shadow-sm"
                }
              `}
            >
              {/* Interactive Background Gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full -mr-20 -mt-20 group-hover:bg-emerald-500/20 transition-colors duration-700" />

              {/* Top Row: Meta & Icon */}
              <div className="relative z-10 flex justify-between items-start">
                <div className="space-y-4">
                  <div
                    className={`flex items-center gap-2 text-xs font-bold tracking-widest uppercase ${isDark ? "text-emerald-400" : "text-emerald-600"}`}
                  >
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  {post.tags && (
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className={`text-[10px] px-2.5 py-1 rounded-md border ${isDark ? "border-slate-700 bg-slate-800 text-slate-400" : "border-slate-200 bg-slate-50 text-slate-500"}`}
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div
                  className={`p-3 rounded-2xl transition-all duration-500 ${isDark ? "bg-slate-800 group-hover:bg-emerald-500" : "bg-slate-100 group-hover:bg-emerald-500"}`}
                >
                  <ArrowUpRight
                    className={`w-5 h-5 transition-colors duration-500 ${isDark ? "text-emerald-500 group-hover:text-white" : "text-slate-600 group-hover:text-white"}`}
                  />
                </div>
              </div>

              {/* Bottom Row: Content */}
              <div className="relative z-10 mt-12">
                <h3
                  className={`${isMain ? "text-3xl md:text-5xl" : "text-2xl"} font-bold mb-4 tracking-tight leading-[1.1] ${textClass}`}
                >
                  {post.title}
                </h3>
                <p
                  className={`${subTextClass} ${isMain ? "text-xl" : "text-base"} line-clamp-3 mb-8 max-w-2xl`}
                >
                  {post.description}
                </p>

                <div className="flex items-center gap-2 font-bold text-sm tracking-wide group-hover:gap-4 transition-all duration-300">
                  <span className={isDark ? "text-white" : "text-slate-900"}>
                    READ ARTICLE
                  </span>
                  <div className="h-0.5 w-12 bg-emerald-500" />
                </div>
              </div>

              {/* Background Noise/Texture Overlay */}
              <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
                style={{
                  backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')`,
                }}
              />
            </a>
          );
        })}

        {/* --- View All Footer Card --- */}
        <a
          href="https://amreshpro.medium.com"
          target="_blank"
          className={`md:col-span-4 rounded-[2.5rem] p-10 flex flex-col items-center justify-center text-center transition-all duration-500 border-2 border-dashed
            ${isDark ? "border-slate-800 hover:border-emerald-500/50 bg-slate-900/20" : "border-slate-200 hover:border-emerald-200 bg-slate-50/50"}
            group relative overflow-hidden`}
        >
          <div className="mb-6 relative">
            <div className="absolute inset-0 bg-emerald-500 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
            <div className="relative p-6 rounded-full bg-emerald-500/10 text-emerald-500 transition-transform duration-500 group-hover:scale-110">
              <BookOpen className="w-10 h-10" />
            </div>
          </div>
          <h4 className={`text-xl font-bold mb-2 ${textClass}`}>
            Curious for more?
          </h4>
          <p className={`${subTextClass} mb-6 text-sm`}>
            Explore my full collection of technical guides and stories.
          </p>
          <div className="flex items-center gap-2 text-emerald-500 font-bold group-hover:translate-x-2 transition-transform">
            View All on Medium <ChevronRight className="w-5 h-5" />
          </div>
        </a>
      </div>
    </section>
  );
};

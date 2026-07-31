import { BookOpen, Calendar, ArrowUpRight, ChevronRight } from "lucide-react";
import { blogPosts } from "../data/portfolio";
import type { BlogPost } from "../types/index";

interface BlogProps {
  isDark: boolean;
  isVisible: boolean;
}

export const Blog = ({ isDark, isVisible }: BlogProps) => {
  
  const textPrimary = isDark ? "text-[#FAFAFA]" : "text-[#0F172A]";
  const textMuted = isDark ? "text-[#A1A1AA]" : "text-[#71717A]";
  const border = isDark ? "border-[#27272A]" : "border-[#E4E4E7]";
  const cardBg = isDark ? "bg-[#18181B]" : "bg-white";
  const badgeBg = isDark ? "bg-[#27272A]" : "bg-[#F4F4F5]";

  return (
    <section
      id="journal"
      className={`mb-32 transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      {/* Section Header */}
      <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="h-[2px] w-10 bg-[#4F46E5]" />
            <span className="font-mono text-sm uppercase tracking-widest text-[#4F46E5]">
              Insights & Articles
            </span>
          </div>
          <h2 className={`text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl ${textPrimary}`}>
            The Journal<span className="text-[#4F46E5]">.</span>
          </h2>
        </div>

        <p className={`max-w-md text-base leading-relaxed md:text-lg ${textMuted}`}>
          Documenting my process, deep-dives into backend systems, and the
          evolving landscape of full-stack engineering.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
        {blogPosts.map((post: BlogPost, idx) => {
          const isMain = idx === 0;

          return (
            <a
              key={post.title}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border p-7 transition-all duration-300 md:p-8
                ${isMain ? "md:col-span-8 min-h-[420px]" : "md:col-span-4 min-h-[320px]"}
                ${cardBg} ${border} hover:border-[#4F46E5]/40 hover:shadow-lg`}
            >
              {/* Top Meta */}
              <div className="relative z-10 flex items-start justify-between">
                <div className="space-y-3">
                  <div className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-wider ${textMuted}`}>
                    <Calendar className="h-3.5 w-3.5" />
                    {post.date}
                  </div>

                  {post.tags && (
                    <div className="flex flex-wrap gap-1.5">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className={`rounded-md border px-2 py-0.5 text-[11px] font-medium ${border} ${badgeBg} ${textMuted}`}
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div
                  className={`rounded-xl p-2.5 transition-all duration-300 ${
                    isDark
                      ? "bg-[#27272A] group-hover:bg-[#4F46E5]"
                      : "bg-[#F4F4F5] group-hover:bg-[#4F46E5]"
                  }`}
                >
                  <ArrowUpRight
                    className={`h-4 w-4 transition-colors ${
                      isDark
                        ? "text-[#A1A1AA] group-hover:text-white"
                        : "text-[#71717A] group-hover:text-white"
                    }`}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 mt-10">
                <h3
                  className={`${
                    isMain ? "text-2xl md:text-4xl" : "text-xl md:text-2xl"
                  } mb-3 font-bold leading-tight tracking-tight ${textPrimary}`}
                >
                  {post.title}
                </h3>

                <p
                  className={`mb-6 line-clamp-3 ${
                    isMain ? "text-base md:text-lg" : "text-sm md:text-base"
                  } ${textMuted}`}
                >
                  {post.description}
                </p>

                <div className="flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3">
                  <span className={textPrimary}>Read Article</span>
                  <div className="h-0.5 w-8 bg-[#4F46E5]" />
                </div>
              </div>
            </a>
          );
        })}

        {/* View All Card */}
        <a
          href="https://amreshpro.medium.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`group relative flex min-h-[320px] flex-col items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed p-8 text-center transition-all duration-300 md:col-span-4
            ${border} ${isDark ? "bg-[#18181B]/40 hover:border-[#4F46E5]/50" : "bg-[#FAFAFA] hover:border-[#4F46E5]/40"}`}
        >
          <div className="mb-5 rounded-2xl bg-[#4F46E5]/10 p-5 text-[#4F46E5] transition-transform duration-300 group-hover:scale-110">
            <BookOpen className="h-8 w-8" />
          </div>

          <h4 className={`mb-2 text-lg font-bold ${textPrimary}`}>
            Curious for more?
          </h4>
          <p className={`mb-5 max-w-xs text-sm ${textMuted}`}>
            Explore the full collection of technical guides and stories.
          </p>

          <div className="flex items-center gap-1.5 font-semibold text-[#4F46E5] transition-transform group-hover:translate-x-1">
            View All on Medium
            <ChevronRight className="h-4 w-4" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Blog;
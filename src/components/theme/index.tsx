// components/ThemeToggleButton.tsx
"use client";

import { useThemeStore } from "../../store/themeStore";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeSwitcher() {
  const { themeStatus, toggleThemeMode } = useThemeStore();
  const isDark = themeStatus.themeValue === "dark";

  return (
    <button
      onClick={toggleThemeMode}
      aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      className="
        m-4
        p-3 rounded-full 
        bg-white/10 dark:bg-black/30 
        border border-white/20 dark:border-white/10 
        shadow-md 
        transition-all duration-300 
        hover:scale-110 hover:rotate-6 
        active:scale-95
        
      "
    >
      {isDark ? (
        <FaSun className="text-yellow-400 text-xl" title="Switch to Light Mode" />
      ) : (
        <FaMoon className="text-blue-950 text-xl" title="Switch to Dark Mode" />
      )}
    </button>
  );
}

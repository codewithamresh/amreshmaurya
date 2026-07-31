import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const ThemeToggle = ({ isDark, toggleTheme }: ThemeToggleProps) => {
  return (
    <button
      onClick={toggleTheme}
      className={`fixed top-6 right-6 z-50 rounded-full border p-3.5 shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 ${
        isDark
          ? "border-[#27272A] bg-[#18181B] text-[#FAFAFA] hover:border-[#4F46E5]/50"
          : "border-[#E4E4E7] bg-white text-[#0F172A] hover:border-[#4F46E5]/40"
      }`}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-[#4F46E5]" />
      ) : (
        <Moon className="h-5 w-5 text-[#4F46E5]" />
      )}
    </button>
  );
};

export default ThemeToggle;
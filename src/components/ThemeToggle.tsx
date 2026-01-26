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

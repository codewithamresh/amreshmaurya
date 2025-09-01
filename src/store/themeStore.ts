// themeStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type ThemeValue = 'light' | 'dark';

interface ThemeStatus {
  isDarkTheme: boolean;
  themeValue: ThemeValue;
}

interface ThemeStore {
  themeStatus: ThemeStatus;
  toggleThemeMode: () => void;
  setTheme: (theme: ThemeValue) => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set, get) => ({
      themeStatus: {
        isDarkTheme: false,
        themeValue: 'light',
      },

      toggleThemeMode: () => {
        const current = get().themeStatus.themeValue;
        const newTheme = current === 'light' ? 'dark' : 'light';

        set({
          themeStatus: {
            isDarkTheme: newTheme === 'dark',
            themeValue: newTheme,
          },
        });
      },

      setTheme: (theme) =>
        set({
          themeStatus: {
            isDarkTheme: theme === 'dark',
            themeValue: theme,
          },
        }),
    }),
    {
      name: 'theme-storage', // localStorage key
    }
  )
);

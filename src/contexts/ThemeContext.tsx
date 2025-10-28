import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeMode = 'light' | 'dark';
export type ThemeName = 'purple' | 'blue' | 'green' | 'orange' | 'pink' | 'indigo' | 'teal';

interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  border: string;
}

interface Theme {
  mode: ThemeMode;
  name: ThemeName;
  colors: ThemeColors;
}

interface ThemeContextType {
  theme: Theme;
  setThemeMode: (mode: ThemeMode) => void;
  setThemeName: (name: ThemeName) => void;
  toggleThemeMode: () => void;
}

const themes: Record<ThemeName, Record<ThemeMode, ThemeColors>> = {
  purple: {
    light: {
      primary: 'from-purple-600 to-pink-600',
      secondary: 'bg-purple-100',
      accent: 'text-purple-600',
      background: 'bg-white',
      surface: 'bg-gray-50',
      text: 'text-gray-900',
      textSecondary: 'text-gray-600',
      border: 'border-purple-200',
    },
    dark: {
      primary: 'from-purple-700 to-pink-700',
      secondary: 'bg-purple-900',
      accent: 'text-purple-400',
      background: 'bg-gray-900',
      surface: 'bg-gray-800',
      text: 'text-white',
      textSecondary: 'text-gray-300',
      border: 'border-purple-700',
    },
  },
  blue: {
    light: {
      primary: 'from-blue-600 to-cyan-600',
      secondary: 'bg-blue-100',
      accent: 'text-blue-600',
      background: 'bg-white',
      surface: 'bg-gray-50',
      text: 'text-gray-900',
      textSecondary: 'text-gray-600',
      border: 'border-blue-200',
    },
    dark: {
      primary: 'from-blue-700 to-cyan-700',
      secondary: 'bg-blue-900',
      accent: 'text-blue-400',
      background: 'bg-gray-900',
      surface: 'bg-gray-800',
      text: 'text-white',
      textSecondary: 'text-gray-300',
      border: 'border-blue-700',
    },
  },
  green: {
    light: {
      primary: 'from-green-500 via-teal-500 to-blue-500',
      secondary: 'bg-green-100',
      accent: 'text-green-600',
      background: 'bg-white',
      surface: 'bg-gray-50',
      text: 'text-gray-900',
      textSecondary: 'text-gray-600',
      border: 'border-green-200',
    },
    dark: {
      primary: 'from-green-700 via-teal-700 to-blue-700',
      secondary: 'bg-green-900',
      accent: 'text-green-400',
      background: 'bg-gray-900',
      surface: 'bg-gray-800',
      text: 'text-white',
      textSecondary: 'text-gray-300',
      border: 'border-green-700',
    },
  },
  orange: {
    light: {
      primary: 'from-orange-500 to-red-500',
      secondary: 'bg-orange-100',
      accent: 'text-orange-600',
      background: 'bg-white',
      surface: 'bg-gray-50',
      text: 'text-gray-900',
      textSecondary: 'text-gray-600',
      border: 'border-orange-200',
    },
    dark: {
      primary: 'from-orange-700 to-red-700',
      secondary: 'bg-orange-900',
      accent: 'text-orange-400',
      background: 'bg-gray-900',
      surface: 'bg-gray-800',
      text: 'text-white',
      textSecondary: 'text-gray-300',
      border: 'border-orange-700',
    },
  },
  pink: {
    light: {
      primary: 'from-pink-500 to-rose-500',
      secondary: 'bg-pink-100',
      accent: 'text-pink-600',
      background: 'bg-white',
      surface: 'bg-gray-50',
      text: 'text-gray-900',
      textSecondary: 'text-gray-600',
      border: 'border-pink-200',
    },
    dark: {
      primary: 'from-pink-700 to-rose-700',
      secondary: 'bg-pink-900',
      accent: 'text-pink-400',
      background: 'bg-gray-900',
      surface: 'bg-gray-800',
      text: 'text-white',
      textSecondary: 'text-gray-300',
      border: 'border-pink-700',
    },
  },
  indigo: {
    light: {
      primary: 'from-indigo-600 to-purple-600',
      secondary: 'bg-indigo-100',
      accent: 'text-indigo-600',
      background: 'bg-white',
      surface: 'bg-gray-50',
      text: 'text-gray-900',
      textSecondary: 'text-gray-600',
      border: 'border-indigo-200',
    },
    dark: {
      primary: 'from-indigo-700 to-purple-700',
      secondary: 'bg-indigo-900',
      accent: 'text-indigo-400',
      background: 'bg-gray-900',
      surface: 'bg-gray-800',
      text: 'text-white',
      textSecondary: 'text-gray-300',
      border: 'border-indigo-700',
    },
  },
  teal: {
    light: {
      primary: 'from-teal-500 to-cyan-500',
      secondary: 'bg-teal-100',
      accent: 'text-teal-600',
      background: 'bg-white',
      surface: 'bg-gray-50',
      text: 'text-gray-900',
      textSecondary: 'text-gray-600',
      border: 'border-teal-200',
    },
    dark: {
      primary: 'from-teal-700 to-cyan-700',
      secondary: 'bg-teal-900',
      accent: 'text-teal-400',
      background: 'bg-gray-900',
      surface: 'bg-gray-800',
      text: 'text-white',
      textSecondary: 'text-gray-300',
      border: 'border-teal-700',
    },
  },
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>('light');
  const [name, setName] = useState<ThemeName>('purple');

  useEffect(() => {
    const savedMode = localStorage.getItem('themeMode') as ThemeMode | null;
    const savedName = localStorage.getItem('themeName') as ThemeName | null;

    if (savedMode) setMode(savedMode);
    if (savedName) setName(savedName);
  }, []);

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (mode === 'dark') {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
  }, [mode]);

  const setThemeMode = (newMode: ThemeMode) => {
    setMode(newMode);
    localStorage.setItem('themeMode', newMode);
  };

  const setThemeName = (newName: ThemeName) => {
    setName(newName);
    localStorage.setItem('themeName', newName);
  };

  const toggleThemeMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setThemeMode(newMode);
  };

  const theme: Theme = {
    mode,
    name,
    colors: themes[name][mode],
  };

  return (
    <ThemeContext.Provider value={{ theme, setThemeMode, setThemeName, toggleThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme debe ser usado dentro de ThemeProvider');
  }
  return context;
};

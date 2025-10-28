import React, { useState } from 'react';
import { useTheme, ThemeName } from '../contexts/ThemeContext';
import { Palette, Moon, Sun } from 'lucide-react';

const themeOptions: Array<{ name: ThemeName; color: string; label: string }> = [
  { name: 'purple', color: 'bg-purple-500', label: 'Púrpura' },
  { name: 'blue', color: 'bg-blue-500', label: 'Azul' },
  { name: 'green', color: 'bg-green-500', label: 'Verde' },
  { name: 'orange', color: 'bg-orange-500', label: 'Naranja' },
  { name: 'pink', color: 'bg-pink-500', label: 'Rosa' },
  { name: 'indigo', color: 'bg-indigo-500', label: 'Índigo' },
  { name: 'teal', color: 'bg-teal-500', label: 'Turquesa' },
];

export const ThemeSelector: React.FC = () => {
  const { theme, setThemeName, toggleThemeMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Theme Menu */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-4 mb-2 w-72 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                <Palette size={18} />
                Elige un tema
              </p>
              <div className="grid grid-cols-4 gap-2">
                {themeOptions.map((option) => (
                  <button
                    key={option.name}
                    onClick={() => {
                      setThemeName(option.name);
                      setIsOpen(false);
                    }}
                    className={`p-3 rounded-lg transition-all duration-300 transform hover:scale-110 ${option.color} ${
                      theme.name === option.name
                        ? 'ring-2 ring-offset-2 ring-gray-400 dark:ring-gray-500 scale-110 shadow-lg'
                        : 'hover:shadow-md'
                    }`}
                    title={option.label}
                    aria-label={option.label}
                  />
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
              <button
                onClick={() => {
                  toggleThemeMode();
                  setIsOpen(false);
                }}
                className="w-full px-4 py-2 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 text-gray-900 dark:text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
              >
                {theme.mode === 'light' ? (
                  <>
                    <Moon size={18} />
                    Modo Oscuro
                  </>
                ) : (
                  <>
                    <Sun size={18} />
                    Modo Claro
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-gradient-to-r ${theme.colors.primary} hover:shadow-lg text-white rounded-full p-4 shadow-lg transition-all duration-300 transform hover:scale-110 active:scale-95`}
        title="Abrir selector de temas"
        aria-label="Abrir selector de temas"
      >
        <Palette size={24} strokeWidth={1.5} />
      </button>
    </div>
  );
};

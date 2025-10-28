import React, { useState } from 'react';
import { useTheme, ThemeName } from '../contexts/ThemeContext';

const themeOptions: Array<{ name: ThemeName; emoji: string; label: string }> = [
  { name: 'purple', emoji: '💜', label: 'Púrpura' },
  { name: 'blue', emoji: '💙', label: 'Azul' },
  { name: 'green', emoji: '💚', label: 'Verde' },
  { name: 'orange', emoji: '🧡', label: 'Naranja' },
  { name: 'pink', emoji: '🩷', label: 'Rosa' },
  { name: 'indigo', emoji: '💎', label: 'Índigo' },
  { name: 'teal', emoji: '🌊', label: 'Turquesa' },
];

export const ThemeSelector: React.FC = () => {
  const { theme, setThemeName, toggleThemeMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Theme Menu */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-4 mb-2 w-64 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="space-y-3">
            <div>
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                🎨 Elige un tema
              </p>
              <div className="grid grid-cols-4 gap-2">
                {themeOptions.map((option) => (
                  <button
                    key={option.name}
                    onClick={() => {
                      setThemeName(option.name);
                      setIsOpen(false);
                    }}
                    className={`p-2 rounded-lg transition-all duration-300 transform hover:scale-110 ${
                      theme.name === option.name
                        ? 'ring-2 ring-offset-2 ring-gray-400 dark:ring-gray-500 scale-110'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                    title={option.label}
                  >
                    <span className="text-2xl">{option.emoji}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                🌓 Modo
              </p>
              <button
                onClick={() => {
                  toggleThemeMode();
                  setIsOpen(false);
                }}
                className="w-full px-4 py-2 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 text-gray-900 dark:text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
              >
                {theme.mode === 'light' ? '🌙 Modo Oscuro' : '☀️ Modo Claro'}
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
      >
        <span className="text-2xl">🎨</span>
      </button>
    </div>
  );
};

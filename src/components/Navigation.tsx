import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  favoritesCount: number;
}

export const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange, favoritesCount }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  const tabs = [
    { id: 'random', label: '🎲 Aleatorio', icon: '🐕' },
    { id: 'search', label: '🔍 Buscar', icon: '🔎' },
    { id: 'breeds', label: '📚 Razas', icon: '📖' },
    { id: 'favorites', label: `❤️ Favoritos (${favoritesCount})`, icon: '❤️' },
  ];

  const handleTabClick = (tabId: string) => {
    onTabChange(tabId);
    setIsOpen(false);
  };

  return (
    <nav className={`bg-gradient-to-r ${theme.colors.primary} shadow-lg sticky top-0 z-50`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => onTabChange('random')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-300 cursor-pointer"
            aria-label="Go to home"
          >
            <span className="text-2xl md:text-3xl">🐶</span>
            <h1 className="text-2xl font-bold text-white">Perritos UwU</h1>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-white text-gray-900 shadow-lg'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`w-full px-4 py-3 rounded-lg font-semibold transition-all duration-300 text-left ${
                  activeTab === tab.id
                    ? 'bg-white text-gray-900 shadow-lg'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

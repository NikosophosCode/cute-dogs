import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Dice5, Search, BookOpen, Heart, Menu, X, Dog } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  favoritesCount: number;
}

export const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange, favoritesCount }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  const tabs = [
    { id: 'random', label: 'Aleatorio', icon: Dice5 },
    { id: 'search', label: 'Buscar', icon: Search },
    { id: 'breeds', label: 'Razas', icon: BookOpen },
    { id: 'favorites', label: `Favoritos (${favoritesCount})`, icon: Heart },
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
            className="flex items-center gap-2 hover:opacity-80 transition-all duration-300 cursor-pointer hover:scale-105 transform"
            aria-label="Go to home"
          >
            <Dog size={32} className="text-white" />
            <h1 className="text-2xl font-bold text-white">Perritos UwU</h1>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap flex items-center gap-2 ${
                    activeTab === tab.id
                      ? 'bg-white text-gray-900 shadow-lg'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  <Icon size={18} strokeWidth={1.5} />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} className="text-white" />
            ) : (
              <Menu size={24} className="text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`w-full px-4 py-3 rounded-lg font-semibold transition-all duration-300 text-left flex items-center gap-3 ${
                    activeTab === tab.id
                      ? 'bg-white text-gray-900 shadow-lg'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  <Icon size={20} strokeWidth={1.5} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

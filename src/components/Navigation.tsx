import React from 'react';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  favoritesCount: number;
}

export const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange, favoritesCount }) => {
  const tabs = [
    { id: 'random', label: '🎲 Aleatorio', icon: '🐕' },
    { id: 'search', label: '🔍 Buscar', icon: '🔎' },
    { id: 'breeds', label: '📚 Razas', icon: '📖' },
    { id: 'favorites', label: `❤️ Favoritos (${favoritesCount})`, icon: '❤️' },
  ];

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <span className="text-3xl">🐶</span>
            <h1 className="text-2xl font-bold text-white">Perritos Tiernos</h1>
          </div>

          <div className="flex gap-2 flex-wrap justify-end">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeTab === tab.id
                    ? 'bg-white text-purple-600 shadow-lg'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

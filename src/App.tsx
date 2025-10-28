import React, { useState } from 'react';
import { Dog } from './types';
import { useFavorites } from './hooks/useFavorites';
import { Navigation } from './components/Navigation';
import { RandomDogs } from './pages/RandomDogs';
import { SearchDogs } from './pages/SearchDogs';
import { Breeds } from './pages/Breeds';
import { Favorites } from './pages/Favorites';

function App() {
  const [activeTab, setActiveTab] = useState('random');
  const { favorites, addFavorite, removeFavorite, isFavorite } = useFavorites();

  const handleFavoriteToggle = (dog: Dog) => {
    if (isFavorite(dog.id)) {
      removeFavorite(dog.id);
    } else {
      addFavorite(dog);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation
        activeTab={activeTab}
        onTabChange={setActiveTab}
        favoritesCount={favorites.length}
      />

      <main>
        {activeTab === 'random' && (
          <RandomDogs
            onFavoriteToggle={handleFavoriteToggle}
            isFavorite={isFavorite}
          />
        )}

        {activeTab === 'search' && (
          <SearchDogs
            onFavoriteToggle={handleFavoriteToggle}
            isFavorite={isFavorite}
          />
        )}

        {activeTab === 'breeds' && (
          <Breeds
            onFavoriteToggle={handleFavoriteToggle}
            isFavorite={isFavorite}
          />
        )}

        {activeTab === 'favorites' && (
          <Favorites
            favorites={favorites}
            onRemoveFavorite={removeFavorite}
            isFavorite={isFavorite}
          />
        )}
      </main>
    </div>
  );
}

export default App;

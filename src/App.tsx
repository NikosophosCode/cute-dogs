import { useState } from 'react';
import { Dog } from './types';
import { useFavorites } from './hooks/useFavorites';
import { useFavoriteFacts } from './hooks/useFavoriteFacts';
import { useTheme } from './contexts/ThemeContext';
import { Navigation } from './components/Navigation';
import { ThemeSelector } from './components/ThemeSelector';
import { Footer } from './components/Footer';
import { RandomDogs } from './pages/RandomDogs';
import { SearchDogs } from './pages/SearchDogs';
import { Breeds } from './pages/Breeds';
import { Favorites } from './pages/Favorites';

function AppContent() {
  const [activeTab, setActiveTab] = useState('random');
  const { favorites, addFavorite, removeFavorite, isFavorite } = useFavorites();
  const { favoriteFacts, addFavoriteFact, removeFavoriteFact, isFavoriteFact } = useFavoriteFacts();
  const { theme } = useTheme();

  const handleFavoriteToggle = (dog: Dog) => {
    if (isFavorite(dog.id)) {
      removeFavorite(dog.id);
    } else {
      addFavorite(dog);
    }
  };

  const handleFactFavoriteToggle = (fact: { id: string; body: string }) => {
    if (isFavoriteFact(fact.id)) {
      removeFavoriteFact(fact.id);
    } else {
      addFavoriteFact(fact);
    }
  };

  return (
    <div className={`min-h-screen ${theme.colors.background} ${theme.mode === 'dark' ? 'dark' : ''}`}>
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
            onFactFavoriteToggle={handleFactFavoriteToggle}
            isFactFavorite={isFavoriteFact}
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
            favoriteFacts={favoriteFacts}
            onRemoveFavorite={removeFavorite}
            onRemoveFavoriteFact={removeFavoriteFact}
            isFavorite={isFavorite}
          />
        )}
      </main>

      <Footer />
      <ThemeSelector />
    </div>
  );
}

export default AppContent;

import React from 'react';
import { Favorite, Dog } from '../types';
import { DogCard } from '../components/DogCard';

interface FavoritesProps {
  favorites: Favorite[];
  onRemoveFavorite: (dogId: string) => void;
  isFavorite: (dogId: string) => boolean;
}

export const Favorites: React.FC<FavoritesProps> = ({ favorites, onRemoveFavorite, isFavorite }) => {
  const dogs: Dog[] = favorites.map((fav) => ({
    id: fav.id,
    url: fav.url,
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-500 via-pink-500 to-purple-500 animate-gradient py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-2xl">
            ❤️ Mis Favoritos
          </h2>
          <p className="text-xl text-white/90">
            {favorites.length === 0
              ? 'No tienes favoritos aún. ¡Agrega algunos!'
              : `Tienes ${favorites.length} perrito${favorites.length !== 1 ? 's' : ''} favorito${favorites.length !== 1 ? 's' : ''}`}
          </p>
        </div>

        {favorites.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {dogs.map((dog) => (
              <div key={dog.id} className="relative">
                <DogCard
                  dog={dog}
                  isFavorite={isFavorite(dog.id)}
                  onFavoriteToggle={() => onRemoveFavorite(dog.id)}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="glass-effect rounded-2xl p-12 text-center max-w-2xl mx-auto">
            <div className="text-8xl mb-4 animate-float">💔</div>
            <p className="text-white text-xl font-medium mb-6">
              No tienes perros favoritos aún
            </p>
            <p className="text-white/80">
              Explora las otras secciones y agrega perros a tus favoritos
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

import React from 'react';
import { Favorite, FavoriteFact, Dog } from '../types';
import { useTheme } from '../contexts/ThemeContext';
import { DogCard } from '../components/DogCard';
import { Heart, Book, BookmarkMinus } from 'lucide-react';

interface FavoritesProps {
  favorites: Favorite[];
  favoriteFacts: FavoriteFact[];
  onRemoveFavorite: (dogId: string) => void;
  onRemoveFavoriteFact: (factId: string) => void;
  isFavorite: (dogId: string) => boolean;
}

export const Favorites: React.FC<FavoritesProps> = ({
  favorites,
  favoriteFacts,
  onRemoveFavorite,
  onRemoveFavoriteFact,
  isFavorite,
}) => {
  const { theme } = useTheme();
  const dogs: Dog[] = favorites.map((fav) => ({
    id: fav.id,
    url: fav.url,
  }));

  const hasDogFavorites = favorites.length > 0;
  const hasFactFavorites = favoriteFacts.length > 0;

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.colors.primary} animate-gradient py-12 ${theme.colors.background}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-2xl">
            ❤️ Mis Favoritos
          </h2>
          <p className="text-xl text-white/90">
            {!hasDogFavorites && !hasFactFavorites
              ? 'No tienes favoritos aún. ¡Agrega algunos!'
              : `Tienes ${favorites.length} perrito${favorites.length !== 1 ? 's' : ''} y ${favoriteFacts.length} dato${favoriteFacts.length !== 1 ? 's' : ''} curioso${favoriteFacts.length !== 1 ? 's' : ''} guardado${favoriteFacts.length !== 1 ? 's' : ''}`}
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
          <section className="space-y-6">
            <div className="flex items-center gap-3 text-white">
              <Heart className="w-7 h-7" strokeWidth={1.5} />
              <h3 className="text-2xl font-semibold">Perritos Guardados</h3>
            </div>

            {hasDogFavorites ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              <div className="glass-effect rounded-2xl p-8 text-center">
                <div className="text-6xl mb-4 animate-float">💔</div>
                <p className="text-white text-lg font-medium mb-4">
                  No tienes perros favoritos aún
                </p>
                <p className="text-white/80">
                  Explora las otras secciones y agrega perros a tus favoritos
                </p>
              </div>
            )}
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-3 text-white">
              <Book className="w-7 h-7" strokeWidth={1.5} />
              <h3 className="text-2xl font-semibold">Datos Curiosos Guardados</h3>
            </div>

            {hasFactFavorites ? (
              <div className="space-y-4">
                {favoriteFacts
                  .slice()
                  .sort((a, b) => b.savedAt - a.savedAt)
                  .map((fact) => (
                    <div key={fact.id} className="glass-effect rounded-2xl p-6 text-white animate-fadeInScale">
                      <p className="text-lg leading-relaxed mb-4">{fact.body}</p>
                      <div className="flex justify-end">
                        <button
                          onClick={() => onRemoveFavoriteFact(fact.id)}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300"
                        >
                          <BookmarkMinus className="w-5 h-5" strokeWidth={1.5} />
                          Quitar
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            ) : (
              <div className="glass-effect rounded-2xl p-8 text-center">
                <div className="text-6xl mb-4 animate-float">🧠</div>
                <p className="text-white text-lg font-medium mb-4">
                  No has guardado datos curiosos todavía
                </p>
                <p className="text-white/80">
                  Descubre nuevos datos curiosos en la sección Perrito Aleatorio y guárdalos aquí
                </p>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { Dog } from '../types';
import { dogAPI } from '../services/api';
import { useTheme } from '../contexts/ThemeContext';
import { DogCard } from '../components/DogCard';

interface RandomDogsProps {
  onFavoriteToggle: (dog: Dog) => void;
  isFavorite: (dogId: string) => boolean;
}

export const RandomDogs: React.FC<RandomDogsProps> = ({ onFavoriteToggle, isFavorite }) => {
  const { theme } = useTheme();
  const [dog, setDog] = useState<Dog | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchRandomDog = async () => {
    setLoading(true);
    setError(null);
    try {
      const randomDog = await dogAPI.getRandomDog();
      setDog(randomDog);
    } catch (err) {
      setError('No se pudo cargar el perrito. Intenta de nuevo.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.colors.primary} animate-gradient py-12 ${theme.colors.background}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-2xl">
            🎲 Perrito Aleatorio
          </h2>
          <p className="text-xl text-white/90">
            Descubre un nuevo perrito adorable cada vez
          </p>
        </div>

        <div className="flex flex-col items-center gap-8">
          {/* Dog Display */}
          <div className="w-full max-w-2xl">
            {dog ? (
              <DogCard
                dog={dog}
                isFavorite={isFavorite(dog.id)}
                onFavoriteToggle={onFavoriteToggle}
              />
            ) : (
              <div className="glass-effect rounded-3xl p-12 text-center">
                <div className="text-8xl mb-4 animate-float">🐕</div>
                <p className="text-white text-xl font-medium">
                  Haz click en el botón para ver un perrito adorable
                </p>
              </div>
            )}
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-500/80 text-white rounded-lg p-4 max-w-2xl animate-fadeInScale">
              <p className="font-semibold">❌ {error}</p>
            </div>
          )}

          {/* Loading Indicator */}
          {loading && (
            <div className="flex items-center gap-2 text-white">
              <svg className="animate-spin h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span className="text-lg font-semibold">Cargando...</span>
            </div>
          )}

          {/* Button */}
          <button
            onClick={fetchRandomDog}
            disabled={loading}
            className="group relative px-8 py-4 bg-white text-purple-600 font-bold text-lg rounded-full shadow-2xl hover:shadow-purple-500/50 transform hover:scale-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed animate-shake"
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg className="w-6 h-6 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
              </svg>
              {loading ? 'Cargando...' : 'Obtener Perrito Aleatorio'}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

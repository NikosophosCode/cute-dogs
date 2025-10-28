import React from 'react';
import { Dog } from '../types';
import { Heart } from 'lucide-react';

interface DogCardProps {
  dog: Dog;
  isFavorite: boolean;
  onFavoriteToggle: (dog: Dog) => void;
}

export const DogCard: React.FC<DogCardProps> = ({ dog, isFavorite, onFavoriteToggle }) => {
  return (
    <div className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fadeInScale">
      <img
        src={dog.url}
        alt="Perrito"
        className="w-full object-cover"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
        <button
          onClick={() => onFavoriteToggle(dog)}
          className={`transform scale-0 group-hover:scale-100 transition-transform duration-300 p-3 rounded-full ${
            isFavorite
              ? 'bg-red-500 hover:bg-red-600'
              : 'bg-white/80 hover:bg-white'
          }`}
          aria-label={isFavorite ? 'Remover de favoritos' : 'Agregar a favoritos'}
        >
          <Heart
            size={24}
            className={isFavorite ? 'text-white' : 'text-red-500'}
            fill={isFavorite ? 'currentColor' : 'none'}
            strokeWidth={2}
          />
        </button>
      </div>

      {/* Favorite indicator */}
      {isFavorite && (
        <div className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 shadow-lg">
          <Heart size={20} fill="currentColor" className="text-white" />
        </div>
      )}
    </div>
  );
};

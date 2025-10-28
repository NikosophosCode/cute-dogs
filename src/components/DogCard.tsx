import React from 'react';
import { Dog } from '../types';

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
        >
          <svg
            className={`w-6 h-6 ${isFavorite ? 'text-white' : 'text-red-500'}`}
            fill={isFavorite ? 'currentColor' : 'none'}
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>

      {/* Favorite indicator */}
      {isFavorite && (
        <div className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
      )}
    </div>
  );
};

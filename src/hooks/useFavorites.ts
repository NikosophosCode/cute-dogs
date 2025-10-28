import { useState, useEffect } from 'react';
import { Favorite } from '../types';

const FAVORITES_STORAGE_KEY = 'dog_favorites';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<Favorite[]>([]);

  // Load favorites from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(FAVORITES_STORAGE_KEY);
    if (stored) {
      try {
        setFavorites(JSON.parse(stored));
      } catch (error) {
        console.error('Error loading favorites:', error);
      }
    }
  }, []);

  // Save favorites to localStorage
  const saveFavorites = (newFavorites: Favorite[]) => {
    setFavorites(newFavorites);
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(newFavorites));
  };

  const addFavorite = (dog: { id: string; url: string }) => {
    const newFavorite: Favorite = {
      id: dog.id,
      url: dog.url,
      addedAt: Date.now(),
    };
    saveFavorites([...favorites, newFavorite]);
  };

  const removeFavorite = (dogId: string) => {
    saveFavorites(favorites.filter((fav) => fav.id !== dogId));
  };

  const isFavorite = (dogId: string) => {
    return favorites.some((fav) => fav.id === dogId);
  };

  return {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
  };
};

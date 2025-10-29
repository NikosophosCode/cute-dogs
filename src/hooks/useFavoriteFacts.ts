import { useEffect, useState } from 'react';
import { FavoriteFact } from '../types';

const FAVORITE_FACTS_STORAGE_KEY = 'dog_fact_favorites';

interface FavoriteFactInput {
  id: string;
  body: string;
}

export const useFavoriteFacts = () => {
  const [favoriteFacts, setFavoriteFacts] = useState<FavoriteFact[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(FAVORITE_FACTS_STORAGE_KEY);
    if (stored) {
      try {
        setFavoriteFacts(JSON.parse(stored));
      } catch (error) {
        console.error('Error loading favorite facts:', error);
      }
    }
  }, []);

  const saveFavoriteFacts = (facts: FavoriteFact[]) => {
    setFavoriteFacts(facts);
    localStorage.setItem(FAVORITE_FACTS_STORAGE_KEY, JSON.stringify(facts));
  };

  const addFavoriteFact = (fact: FavoriteFactInput) => {
    if (favoriteFacts.some((fav) => fav.id === fact.id)) {
      return;
    }

    const newFavoriteFact: FavoriteFact = {
      id: fact.id,
      body: fact.body,
      savedAt: Date.now(),
    };

    saveFavoriteFacts([...favoriteFacts, newFavoriteFact]);
  };

  const removeFavoriteFact = (factId: string) => {
    saveFavoriteFacts(favoriteFacts.filter((fact) => fact.id !== factId));
  };

  const isFavoriteFact = (factId: string) => {
    return favoriteFacts.some((fact) => fact.id === factId);
  };

  return {
    favoriteFacts,
    addFavoriteFact,
    removeFavoriteFact,
    isFavoriteFact,
  };
};

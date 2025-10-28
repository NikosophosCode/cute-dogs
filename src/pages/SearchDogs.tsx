import React, { useState, useEffect } from 'react';
import { Dog, Breed } from '../types';
import { dogAPI } from '../services/api';
import { useTheme } from '../contexts/ThemeContext';
import { DogCard } from '../components/DogCard';

interface SearchDogsProps {
  onFavoriteToggle: (dog: Dog) => void;
  isFavorite: (dogId: string) => boolean;
}

export const SearchDogs: React.FC<SearchDogsProps> = ({ onFavoriteToggle, isFavorite }) => {
  const { theme } = useTheme();
  const [dogs, setDogs] = useState<Dog[]>([]);
  const [breeds, setBreeds] = useState<Breed[]>([]);
  const [selectedBreed, setSelectedBreed] = useState<number | ''>('');
  const [limit, setLimit] = useState(10);
  const [order, setOrder] = useState<'RANDOM' | 'ASC' | 'DESC'>('RANDOM');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load breeds on mount
  useEffect(() => {
    const loadBreeds = async () => {
      try {
        const allBreeds = await dogAPI.getAllBreeds();
        setBreeds(allBreeds);
      } catch (err) {
        console.error('Error loading breeds:', err);
      }
    };
    loadBreeds();
  }, []);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    try {
      const results = await dogAPI.searchDogs({
        limit,
        breed_id: selectedBreed ? Number(selectedBreed) : undefined,
        order,
      });
      setDogs(results);
    } catch (err) {
      setError('No se pudieron cargar los perros. Intenta de nuevo.');
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
            🔍 Buscar Perros
          </h2>
          <p className="text-xl text-white/90">
            Filtra por raza, cantidad y orden
          </p>
        </div>

        {/* Search Filters */}
        <div className="glass-effect rounded-2xl p-8 mb-12 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/* Breed Select */}
            <div>
              <label className="block text-white font-semibold mb-2">Raza</label>
              <select
                value={selectedBreed}
                onChange={(e) => setSelectedBreed(e.target.value ? Number(e.target.value) : '')}
                className="w-full px-4 py-2 rounded-lg bg-white/20 text-stone-950 border border-white/30 focus:outline-none focus:border-white"
              >
                <option value="">Todas las razas</option>
                {breeds.map((breed) => (
                  <option key={breed.id} value={breed.id}>
                    {breed.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Limit Input */}
            <div>
              <label className="block text-white font-semibold mb-2">Cantidad</label>
              <input
                type="number"
                min="1"
                max="100"
                value={limit}
                onChange={(e) => setLimit(Number(e.target.value))}
                className="w-full px-4 py-2 rounded-lg bg-white/20 text-stone-950 border border-white/30 focus:outline-none focus:border-white"
              />
            </div>

            {/* Order Select */}
            <div>
              <label className="block text-white font-semibold mb-2">Orden</label>
              <select
                value={order}
                onChange={(e) => setOrder(e.target.value as 'RANDOM' | 'ASC' | 'DESC')}
                className="w-full px-4 py-2 rounded-lg bg-white/20 text-stone-950 border border-white/30 focus:outline-none focus:border-white"
              >
                <option value="RANDOM">Aleatorio</option>
                <option value="ASC">Ascendente</option>
                <option value="DESC">Descendente</option>
              </select>
            </div>
          </div>

          {/* Search Button */}
          <button
            onClick={handleSearch}
            disabled={loading}
            className="w-full px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
          >
            {loading ? '🔄 Buscando...' : '🔍 Buscar'}
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-500/80 text-white rounded-lg p-4 max-w-4xl mx-auto mb-8 animate-fadeInScale">
            <p className="font-semibold">❌ {error}</p>
          </div>
        )}

        {/* Dogs Grid */}
        {dogs.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {dogs.map((dog) => (
              <DogCard
                key={dog.id}
                dog={dog}
                isFavorite={isFavorite(dog.id)}
                onFavoriteToggle={onFavoriteToggle}
              />
            ))}
          </div>
        )}

        {/* No Results */}
        {!loading && dogs.length === 0 && !error && (
          <div className="text-center text-white">
            <p className="text-xl">Usa los filtros y haz click en buscar</p>
          </div>
        )}
      </div>
    </div>
  );
};

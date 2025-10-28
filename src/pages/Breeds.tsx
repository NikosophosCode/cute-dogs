import React, { useState, useEffect } from 'react';
import { Breed, Dog } from '../types';
import { dogAPI } from '../services/api';
import { DogCard } from '../components/DogCard';

interface BreedsProps {
  onFavoriteToggle: (dog: Dog) => void;
  isFavorite: (dogId: string) => boolean;
}

export const Breeds: React.FC<BreedsProps> = ({ onFavoriteToggle, isFavorite }) => {
  const [breeds, setBreeds] = useState<Breed[]>([]);
  const [selectedBreed, setSelectedBreed] = useState<Breed | null>(null);
  const [breedImages, setBreadImages] = useState<Dog[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadBreeds = async () => {
      setLoading(true);
      try {
        const allBreeds = await dogAPI.getAllBreeds();
        setBreeds(allBreeds);
      } catch (err) {
        setError('No se pudieron cargar las razas.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadBreeds();
  }, []);

  const handleBreedSelect = async (breed: Breed) => {
    setSelectedBreed(breed);
    setBreadImages([]);
    setLoading(true);
    setError(null);
    try {
      const images = await dogAPI.getImagesByBreed(breed.id, 12);
      setBreadImages(images);
    } catch (err) {
      setError('No se pudieron cargar las imágenes de esta raza.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-500 via-teal-500 to-blue-500 animate-gradient py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-2xl">
            📚 Razas de Perros
          </h2>
          <p className="text-xl text-white/90">
            Explora todas las razas disponibles
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Breeds List */}
          <div className="lg:col-span-1">
            <div className="glass-effect rounded-2xl p-6 sticky top-20 max-h-[calc(100vh-120px)] overflow-y-auto">
              <h3 className="text-white font-bold text-lg mb-4">Razas</h3>
              <div className="space-y-2">
                {breeds.map((breed) => (
                  <button
                    key={breed.id}
                    onClick={() => handleBreedSelect(breed)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ${
                      selectedBreed?.id === breed.id
                        ? 'bg-white text-green-600 font-semibold'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    {breed.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Breed Details and Images */}
          <div className="lg:col-span-3">
            {selectedBreed ? (
              <div className="space-y-8">
                {/* Breed Info */}
                <div className="glass-effect rounded-2xl p-8">
                  <h3 className="text-3xl font-bold text-white mb-4">{selectedBreed.name}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
                    {selectedBreed.temperament && (
                      <div>
                        <p className="font-semibold text-white/80">Temperamento</p>
                        <p>{selectedBreed.temperament}</p>
                      </div>
                    )}
                    {selectedBreed.origin && (
                      <div>
                        <p className="font-semibold text-white/80">Origen</p>
                        <p>{selectedBreed.origin}</p>
                      </div>
                    )}
                    {selectedBreed.life_span && (
                      <div>
                        <p className="font-semibold text-white/80">Esperanza de vida</p>
                        <p>{selectedBreed.life_span}</p>
                      </div>
                    )}
                    {selectedBreed.weight && (
                      <div>
                        <p className="font-semibold text-white/80">Peso</p>
                        <p>{selectedBreed.weight.metric} kg</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Images Grid */}
                {loading ? (
                  <div className="flex items-center justify-center gap-2 text-white">
                    <svg className="animate-spin h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Cargando imágenes...</span>
                  </div>
                ) : breedImages.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {breedImages.map((dog) => (
                      <DogCard
                        key={dog.id}
                        dog={dog}
                        isFavorite={isFavorite(dog.id)}
                        onFavoriteToggle={onFavoriteToggle}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center text-white">
                    <p className="text-lg">No hay imágenes disponibles para esta raza</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="glass-effect rounded-2xl p-12 text-center">
                <div className="text-8xl mb-4 animate-float">📖</div>
                <p className="text-white text-xl font-medium">
                  Selecciona una raza para ver detalles e imágenes
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-500/80 text-white rounded-lg p-4 max-w-4xl mx-auto mt-8 animate-fadeInScale">
            <p className="font-semibold">❌ {error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

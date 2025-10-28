import axios from 'axios';
import { Dog, Breed, SearchParams, DogFact } from '../types';

const API_BASE_URL = 'https://api.thedogapi.com/v1';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
});

// Translation cache to avoid translating the same fact multiple times
const translationCache = new Map<string, string>();

// Helper function to translate text with caching using MyMemory API (free, no key required)
const translateWithCache = async (text: string): Promise<string> => {
  // Create a cache key from the first 50 characters of the text
  const cacheKey = text.substring(0, 50);
  
  // Check if translation exists in memory cache
  if (translationCache.has(cacheKey)) {
    return translationCache.get(cacheKey)!;
  }
  
  // Check if translation exists in localStorage
  const localStorageKey = `fact_translation_${cacheKey}`;
  const cachedTranslation = localStorage.getItem(localStorageKey);
  
  if (cachedTranslation) {
    translationCache.set(cacheKey, cachedTranslation);
    return cachedTranslation;
  }
  
  try {
    // Use MyMemory Translation API (free, no authentication required)
    const response = await axios.get('https://api.mymemory.translated.net/get', {
      params: {
        q: text,
        langpair: 'en|es',
      },
    });
    
    const translated = response.data.responseData.translatedText;
    
    // Store in both caches
    translationCache.set(cacheKey, translated);
    localStorage.setItem(localStorageKey, translated);
    
    return translated;
  } catch (error) {
    console.error('Translation error:', error);
    // Return original text if translation fails
    return text;
  }
};

export const dogAPI = {
  // Get random dog image
  getRandomDog: async (): Promise<Dog> => {
    const response = await apiClient.get<Dog[]>('/images/search', {
      params: {
        limit: 1,
      },
    });
    return response.data[0];
  },

  // Get dogs with search parameters
  searchDogs: async (params: SearchParams): Promise<Dog[]> => {
    const response = await apiClient.get<Dog[]>('/images/search', {
      params: {
        limit: params.limit || 10,
        page: params.page || 0,
        order: params.order || 'RANDOM',
        breed_id: params.breed_id,
      },
    });
    return response.data;
  },

  // Get all breeds
  getAllBreeds: async (): Promise<Breed[]> => {
    const response = await apiClient.get<Breed[]>('/breeds');
    return response.data;
  },

  // Get breed by ID
  getBreedById: async (breedId: number): Promise<Breed> => {
    const response = await apiClient.get<Breed>(`/breeds/${breedId}`);
    return response.data;
  },

  // Get images by breed
  getImagesByBreed: async (breedId: number, limit: number = 10): Promise<Dog[]> => {
    const response = await apiClient.get<Dog[]>('/images/search', {
      params: {
        breed_id: breedId,
        limit,
      },
    });
    return response.data;
  },

  // Get random dog fact
  getRandomDogFact: async (): Promise<DogFact> => {
    const factApiClient = axios.create({
      baseURL: 'https://dogapi.dog/api/v2',
    });
    const response = await factApiClient.get<{ data: DogFact[] }>('/facts');
    const fact = response.data.data[0];
    
    // Translate the fact to Spanish
    const translatedBody = await translateWithCache(fact.attributes.body);
    
    return {
      ...fact,
      attributes: {
        body: translatedBody,
      },
    };
  },
};

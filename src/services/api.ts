import axios from 'axios';
import { Dog, Breed, SearchParams } from '../types';

const API_BASE_URL = 'https://api.thedogapi.com/v1';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
});

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
};

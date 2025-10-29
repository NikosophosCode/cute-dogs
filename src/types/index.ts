export interface Dog {
  id: string;
  url: string;
  breeds?: Breed[];
  width?: number;
  height?: number;
}

export interface Breed {
  id: number;
  name: string;
  temperament?: string;
  origin?: string;
  life_span?: string;
  weight?: {
    imperial: string;
    metric: string;
  };
  height?: {
    imperial: string;
    metric: string;
  };
  image?: {
    id: string;
    width: number;
    height: number;
    url: string;
  };
}

export interface Favorite {
  id: string;
  url: string;
  addedAt: number;
}

export interface FavoriteFact {
  id: string;
  body: string;
  savedAt: number;
}

export interface SearchParams {
  limit?: number;
  page?: number;
  order?: 'RANDOM' | 'ASC' | 'DESC';
  breed_id?: number;
}

export interface DogFact {
  id: string;
  type: string;
  attributes: {
    body: string;
  };
}

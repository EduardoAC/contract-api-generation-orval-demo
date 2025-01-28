export interface DogsAPIResponse<T> {
  message: T;
  status: 'success' | 'error';
}

export type DogImageResponse = DogsAPIResponse<string>;

type Breed = Record<string, string[]>;

export type DogBreedsResponse = DogsAPIResponse<Breed>;

/**
 * Generated by orval v7.4.1 🍺
 * Do not edit manually.
 * API example
 * The example API description
 * OpenAPI spec version: 1.0
 */
import { faker } from '@faker-js/faker';
import { HttpResponse, delay, http } from 'msw';
import type { DogBreedsResponse, DogImage } from '.././model';

export const getDogsControllerGetImageResponseMock = (
  overrideResponse: Partial<DogImage> = {},
): DogImage => ({
  message: faker.string.alpha(20),
  status: faker.string.alpha(20),
  ...overrideResponse,
});

export const getDogsControllerGetBreedsResponseMock = (
  overrideResponse: Partial<DogBreedsResponse> = {},
): DogBreedsResponse => ({
  message: {
    [faker.string.alphanumeric(5)]: Array.from(
      { length: faker.number.int({ min: 1, max: 10 }) },
      (_, i) => i + 1,
    ).map(() => faker.string.alpha(20)),
  },
  status: faker.string.alpha(20),
  ...overrideResponse,
});

export const getDogsControllerGetImageMockHandler = (
  overrideResponse?:
    | DogImage
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0],
      ) => Promise<DogImage> | DogImage),
) => {
  return http.get('*/dogs/image', async (info) => {
    await delay(1000);

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === 'function'
            ? await overrideResponse(info)
            : overrideResponse
          : getDogsControllerGetImageResponseMock(),
      ),
      { status: 200, headers: { 'Content-Type': 'application/json' } },
    );
  });
};

export const getDogsControllerGetBreedsMockHandler = (
  overrideResponse?:
    | DogBreedsResponse
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0],
      ) => Promise<DogBreedsResponse> | DogBreedsResponse),
) => {
  return http.get('*/dogs/breeds', async (info) => {
    await delay(1000);

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === 'function'
            ? await overrideResponse(info)
            : overrideResponse
          : getDogsControllerGetBreedsResponseMock(),
      ),
      { status: 200, headers: { 'Content-Type': 'application/json' } },
    );
  });
};
export const getDogsMock = () => [
  getDogsControllerGetImageMockHandler(),
  getDogsControllerGetBreedsMockHandler(),
];

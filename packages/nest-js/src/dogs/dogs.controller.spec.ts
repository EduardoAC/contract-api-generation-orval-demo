import { HttpService } from '@nestjs/axios';
import { TestingModule, Test } from '@nestjs/testing';
import axios, { AxiosInstance } from 'axios';
import { DogsController } from './dogs.controller';

jest.mock('axios'); // Mock Axios globally

describe('DogsController', () => {
  let dogsController: DogsController;
  let axiosRef: jest.Mocked<AxiosInstance>;

  beforeEach(async () => {
    // Create a mocked instance of Axios
    axiosRef = axios as unknown as jest.Mocked<AxiosInstance>;

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DogsController,
        {
          provide: HttpService,
          useValue: {
            axiosRef, // Inject the mocked Axios instance
          },
        },
      ],
    }).compile();

    dogsController = module.get<DogsController>(DogsController);
  });

  describe('getImage', () => {
    it('should return a list of channels', async () => {
      axiosRef.get.mockResolvedValueOnce({
        data: {
          message: 'https://example.com/random-dog.jpg',
          status: 'success',
        },
      });

      const result = await dogsController.getImage();
      expect(result).toEqual('https://example.com/random-dog.jpg');
      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(axiosRef.get).toHaveBeenCalledWith(
        'https://dog.ceo/api/breeds/image/random',
      );
    });
  });

  describe('getBreeds', () => {
    it('should return user information', async () => {
      // Mock Axios GET response
      axiosRef.get.mockResolvedValueOnce({
        data: {
          message: { spitz: ['indian', 'japanese'], springer: ['english'] },
          status: 'success',
        },
      });

      const result = await dogsController.getBreeds();
      expect(result).toEqual({
        spitz: ['indian', 'japanese'],
        springer: ['english'],
      });
      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(axiosRef.get).toHaveBeenCalledWith(
        'https://dog.ceo/api/breeds/list/all',
      );
    });
  });
});

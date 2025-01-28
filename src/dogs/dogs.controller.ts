import { HttpService } from '@nestjs/axios';
import { Controller, Get } from '@nestjs/common';
import { DogBreedsResponse, DogImageResponse } from './dogs.types';

@Controller('dogs')
export class DogsController {
  constructor(private readonly httpService: HttpService) {}

  dogsApi = 'https://dog.ceo/api';

  @Get('image')
  async getImage() {
    const url = `${this.dogsApi}/breeds/image/random`;

    try {
      const response =
        await this.httpService.axiosRef.get<DogImageResponse>(url);

      return response.data.message;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(`Failed to dog image: ${error.message}`); // Safe to access `message`
      } else {
        console.log('An unknown error occurred');
      }
      throw new Error();
    }
  }

  @Get('breeds')
  async getBreeds() {
    const url = `${this.dogsApi}/breeds/list/all`;

    try {
      const response =
        await this.httpService.axiosRef.get<DogBreedsResponse>(url);

      return response.data.message;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`Failed to fetch dog breeds: ${error.message}`);
      } else {
        throw new Error('An unknown error occurred');
      }
    }
  }
}

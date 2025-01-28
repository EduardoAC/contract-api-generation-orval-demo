import { ApiProperty } from '@nestjs/swagger';

export class DogImage {
  @ApiProperty({
    example:
      'https://images.dog.ceo/breeds/elkhound-norwegian/n02091467_2159.jpg',
    description: 'Dog image',
  })
  message: string;

  @ApiProperty({ example: 'success', description: 'Response status' })
  status: string;
}

import { ApiProperty } from '@nestjs/swagger';

export class DogBreedsResponse {
  @ApiProperty({
    description: 'A map of dog breeds and their sub-breeds',
    example: {
      affenpinscher: [],
      australian: ['kelpie', 'shepherd'],
      bulldog: ['boston', 'english', 'french'],
      retriever: ['golden', 'chesapeake', 'curly'],
    },
    type: Object, // Swagger does not support dynamic key-value pairs, so we document it as an object
    additionalProperties: {
      type: 'array',
      items: { type: 'string' },
    },
  })
  message: Record<string, string[]>;

  @ApiProperty({
    description: 'The status of the response',
    example: 'success',
  })
  status: string;
}

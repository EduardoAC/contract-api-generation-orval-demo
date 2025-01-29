import { defineConfig } from 'orval';

export default defineConfig({
  dogs: {
    output: {
      mode: 'tags-split',
      target: 'package/dogs.ts',
      schemas: 'package/model',
      client: 'react-query',
      mock: true,
      prettier: true,
    },
    input: {
      target: './package/swagger-spec.json',
    },
  },
});

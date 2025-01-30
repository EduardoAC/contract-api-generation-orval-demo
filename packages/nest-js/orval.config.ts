import { defineConfig } from 'orval';

const packageName = "nestjs-api-hooks"
export default defineConfig({
  nestjs_api: {
    output: {
      mode: 'tags-split',
      workspace: `../${packageName}`,
      target: './dogs.ts',
      schemas: 'model',
      client: 'react-query',
      mock: true,
      prettier: true,
    },
    input: {
      target: `../${packageName}/swagger-spec.json`,
    },
  },
});

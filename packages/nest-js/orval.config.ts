import { Config } from '@orval/core';

const packageName = 'nestjs-api-hooks';

const config: Config = {
  nestjs_api: {
    output: {
      mode: 'tags-split',
      workspace: `../${packageName}/src/`,
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
};

export default config;

import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from '../../../src/app.module';
import { writeFileSync } from 'node:fs';

async function generateSwaggerSpec() {
  const app = await NestFactory.create(AppModule);

  // Define Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('API example')
    .setDescription('The example API description')
    .setVersion('1.0')
    .addTag('example')
    .build();

  // Generate Swagger document
  const document = SwaggerModule.createDocument(app, config);

  // Write Swagger spec to a file
  writeFileSync(
    '../nestjs-api-hooks/swagger-spec.json',
    JSON.stringify(document, null, 2),
  );

  console.log('Swagger spec generated successfully!');

  await app.close();
}

generateSwaggerSpec();

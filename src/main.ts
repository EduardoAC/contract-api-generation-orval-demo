import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { writeFileSync } from 'node:fs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Setup swagger document genrator
  const config = new DocumentBuilder()
    .setTitle('API example')
    .setDescription('The example API description')
    .setVersion('1.0')
    .addTag('example')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  const document = SwaggerModule.createDocument(app, config);
  writeFileSync(
    './package/swagger-spec.json',
    JSON.stringify(document, undefined, 2),
  );
  SwaggerModule.setup('api', app, documentFactory);
  SwaggerModule.setup('swagger', app, documentFactory, {
    jsonDocumentUrl: 'swagger/json',
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

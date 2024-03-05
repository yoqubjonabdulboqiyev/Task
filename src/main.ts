import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import bodyParser from 'body-parser';
import { join } from 'path';
import { config } from './common/config';

async function start() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();

  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api');

  app.useStaticAssets(join(__dirname, '../../', 'uploads'));

  const options = new DocumentBuilder()
    .setTitle('Test')
    .setDescription('/api-swagger-json')
    .setVersion('0.0.1')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-swagger', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  });

  await app.listen(3001, () => {
    console.log(
      `Server is running on http://localhost:${config.serverPort}`,
      'Server',
    );

    console.log(
      `Swagger route: http://localhost:${config.serverPort}/api-swagger`,
      'Swagger',
    );
  });
}
start();

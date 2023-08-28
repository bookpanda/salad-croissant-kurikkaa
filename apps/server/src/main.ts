import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('bootstrap');
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const port = parseInt(configService.get('PORT'));
  const clientPort = parseInt(configService.get('CLIENT_PORT'));

  app.enableCors({
    origin: [
      `http://localhost:${clientPort}`,
      'https://salad-croissant-kurikkaa.vercel.app',
      new RegExp(`^http://192\.168\.1\.([1-9]|[1-9]\d):${clientPort}$`),
    ],
  });

  await app.listen(port);
  logger.log(`Application listening on port ${port}`);
}
bootstrap();

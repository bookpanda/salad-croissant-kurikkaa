import { ConfigModule, ConfigService } from '@nestjs/config';
import { RedisModule } from './redis.module';
import { Logger, forwardRef } from '@nestjs/common';
import { ClicksModule } from 'src/clicks/clicks.module';
import { ClicksService } from 'src/clicks/clicks.service';

export const redisModule = RedisModule.registerAsync({
  imports: [ConfigModule, forwardRef(() => ClicksModule)],
  useFactory: async (
    configService: ConfigService,
    clickService: ClicksService,
  ) => {
    const logger = new Logger('RedisModule');

    return {
      connectionOptions: {
        host: configService.get('REDIS_HOST'),
        port: configService.get('REDIS_PORT'),
      },
      onClientReady: (client) => {
        logger.log('Redis client ready');

        client.on('error', (error) => {
          logger.error('Redis Client Error: ', error);
        });

        client.on('connect', () => {
          logger.log(
            `Redis client connected on ${client.options.host}:${client.options.port}`,
          );
          clickService.init();
        });
      },
    };
  },

  inject: [ConfigService, ClicksService],
});

// export const jwtModule = JwtModule.registerAsync({
//   imports: [ConfigModule],
//   useFactory: async (configService: ConfigService) => ({
//     secret: configService.get('JWT_SECRET'),
//     signOptions: {
//       expiresIn: configService.get('JWT_EXPIRATION_TIME'),
//     },
//   }),
//   inject: [ConfigService],
// });

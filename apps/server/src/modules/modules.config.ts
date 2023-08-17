import { ConfigModule, ConfigService } from '@nestjs/config';
import { RedisModule } from './redis.module';
import { Logger } from '@nestjs/common';

export const redisModule = RedisModule.registerAsync({
  imports: [ConfigModule],
  useFactory: async (configService: ConfigService) => {
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
        });
      },
    };
  },

  inject: [ConfigService],
});

// export const jwtModule =

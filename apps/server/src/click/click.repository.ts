import { Inject, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Redis } from 'ioredis';
import { IORedisKey } from 'src/modules/redis.module';

@Injectable()
export class ClickRepository {
  private readonly logger = new Logger(ClickRepository.name);

  constructor(
    private configService: ConfigService,
    @Inject(IORedisKey) private readonly redisClient: Redis,
  ) {}
}

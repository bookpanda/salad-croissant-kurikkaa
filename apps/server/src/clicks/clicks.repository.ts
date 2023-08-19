import {
  Inject,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Redis } from 'ioredis';
import { IORedisKey } from 'src/modules/redis.module';
import { Scores } from 'shared';

@Injectable()
export class ClicksRepository {
  private readonly logger = new Logger(ClicksRepository.name);
  private cooldown = new Date(new Date().getTime() - 1000 * 5);

  constructor(
    private configService: ConfigService,
    @Inject(IORedisKey) private readonly redisClient: Redis,
  ) {}

  async click(choice: string) {
    this.logger.log(`click, ${choice}`);

    const key = 'clicks';

    if (new Date() > this.cooldown) {
      try {
        await this.redisClient.hincrby(key, choice, 1);
        this.cooldown = new Date(new Date().getTime() + 1000 * 5);
        return await this.getScores();
      } catch (error) {
        this.logger.error(
          `Error incrementing click count: ${choice}\n${error}`,
        );
        throw new InternalServerErrorException();
      }
    } else {
      this.logger.log('Cooldown period, not incrementing click count');
      return await this.getScores();
    }
  }

  async getScores(): Promise<Scores> {
    this.logger.log('getScores');

    try {
      const scores = await this.redisClient.hgetall('clicks');
      return {
        salad: parseInt(scores.salad),
        croissant: parseInt(scores.croissant),
        cooldown: this.cooldown.getTime(),
      };
    } catch (error) {
      this.logger.error(`Error getting scores\n${error}`);
      throw new InternalServerErrorException();
    }
  }
}

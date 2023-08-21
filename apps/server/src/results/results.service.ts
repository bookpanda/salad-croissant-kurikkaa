import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { ClicksService } from 'src/clicks/clicks.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ResultsService {
  private readonly logger = new Logger(ResultsService.name);
  constructor(
    private prisma: PrismaService,
    private clickService: ClicksService,
  ) {}

  //   @Cron('0 0 * * *')
  @Cron(CronExpression.EVERY_30_SECONDS)
  async resetScore() {
    this.logger.log('Resetting score');
    const scores = await this.clickService.getScores();
    await this.storeResult(scores.salad, scores.croissant);

    await this.clickService.resetScores();
  }

  async storeResult(salad: number, croissant: number) {
    this.logger.log('Storing result');

    try {
      const result = await this.prisma.result.create({
        data: {
          salad,
          croissant,
        },
      });
      return result;
    } catch (error) {
      this.logger.error(`Error storing result\n${error}`);
      throw new InternalServerErrorException();
    }
  }

  async getResults() {
    this.logger.log('Getting results');

    try {
      const results = await this.prisma.result.findMany({
        orderBy: {
          createdAt: 'desc',
        },
        take: 30,
      });
      return results;
    } catch (error) {
      this.logger.error(`Error getting result\n${error}`);
      throw new InternalServerErrorException();
    }
  }
}

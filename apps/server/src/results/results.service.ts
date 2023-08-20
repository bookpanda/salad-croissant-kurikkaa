import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class ResultsService {
  private readonly logger = new Logger(ResultsService.name);

  //   @Cron('0 0 * * *')
  @Cron(CronExpression.EVERY_10_SECONDS)
  resetScore() {
    this.logger.log('Resetting score');
  }
}

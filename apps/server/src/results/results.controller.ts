import { Controller, Get, Logger } from '@nestjs/common';
import { ResultsService } from './results.service';

@Controller('results')
export class ResultsController {
  private logger = new Logger(ResultsController.name);

  constructor(private resultsService: ResultsService) {}

  @Get()
  async getResults() {
    this.logger.log('getResults');

    return await this.resultsService.getResults();
  }
}

import { Injectable, Logger } from '@nestjs/common';
import { ClicksRepository } from './clicks.repository';

@Injectable()
export class ClicksService {
  private readonly logger = new Logger(ClicksService.name);
  constructor(private readonly clickRepository: ClicksRepository) {}

  async init() {
    this.logger.log('Initializing Redis');

    return await this.clickRepository.init();
  }

  async click(choice: string) {
    this.logger.log(`click, ${choice}`);

    return await this.clickRepository.click(choice);
  }

  async getScores() {
    this.logger.log('getScores');

    return await this.clickRepository.getScores();
  }

  async resetScores() {
    this.logger.log('resetScores');

    return await this.clickRepository.resetScores();
  }
}

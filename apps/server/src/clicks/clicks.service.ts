import { Injectable, Logger } from '@nestjs/common';
import { ClicksRepository } from './clicks.repository';

@Injectable()
export class ClicksService {
  private readonly logger = new Logger(ClicksService.name);
  constructor(private readonly clickRepository: ClicksRepository) {}

  async join() {
    this.logger.log('join');

    // return await this.clickRepository.join();
  }

  async click(choice: string) {
    this.logger.log(`click, ${choice}`);

    // return await this.clickRepository.click(choice);
  }
}

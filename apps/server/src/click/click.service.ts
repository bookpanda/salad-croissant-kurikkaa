import { Injectable, Logger } from '@nestjs/common';
import { ClickRepository } from './click.repository';

@Injectable()
export class ClickService {
  private readonly logger = new Logger(ClickService.name);
  constructor(private readonly clickRepository: ClickRepository) {}

  async join() {
    this.logger.log('join');

    // return await this.clickRepository.join();
  }
}

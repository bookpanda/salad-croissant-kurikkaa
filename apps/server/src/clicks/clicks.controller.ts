import { Controller, Get } from '@nestjs/common';
import { ClicksService } from './clicks.service';

@Controller()
export class ClicksController {
  constructor(private clicksService: ClicksService) {}

  @Get()
  async join() {
    return await this.clicksService.join();
  }
}

import { Controller, Get } from '@nestjs/common';
import { ClickService } from './click.service';

@Controller()
export class ClickController {
  constructor(private clickService: ClickService) {}

  @Get()
  async join() {
    return await this.clickService.join();
  }
}

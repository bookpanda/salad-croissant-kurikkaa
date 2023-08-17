import { Module } from '@nestjs/common';
import { redisModule } from 'src/modules/modules.config';
import { ClickController } from './click.controller';
import { ClickService } from './click.service';
import { ClickRepository } from './click.repository';

@Module({
  imports: [redisModule],
  controllers: [ClickController],
  providers: [ClickService, ClickRepository],
})
export class ClickModule {}

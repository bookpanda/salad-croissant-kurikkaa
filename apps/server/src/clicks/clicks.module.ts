import { Module } from '@nestjs/common';
import { redisModule } from 'src/modules/modules.config';
import { ClicksController } from './clicks.controller';
import { ClicksService } from './clicks.service';
import { ClicksRepository } from './clicks.repository';

@Module({
  imports: [redisModule],
  controllers: [ClicksController],
  providers: [ClicksService, ClicksRepository],
})
export class ClicksModule {}

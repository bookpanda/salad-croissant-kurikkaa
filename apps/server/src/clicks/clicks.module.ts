import { Module } from '@nestjs/common';
import { redisModule } from 'src/modules/modules.config';
import { ClicksService } from './clicks.service';
import { ClicksRepository } from './clicks.repository';
import { ClicksGateway } from './clicks.gateway';

@Module({
  imports: [redisModule],
  providers: [ClicksService, ClicksRepository, ClicksGateway],
  exports: [ClicksService],
})
export class ClicksModule {}

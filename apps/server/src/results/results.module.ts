import { Module } from '@nestjs/common';
import { ResultsController } from './results.controller';
import { ResultsService } from './results.service';
import { ScheduleModule } from '@nestjs/schedule';
import { ClicksModule } from 'src/clicks/clicks.module';

@Module({
  imports: [ScheduleModule.forRoot(), ClicksModule],
  controllers: [ResultsController],
  providers: [ResultsService],
})
export class ResultsModule {}

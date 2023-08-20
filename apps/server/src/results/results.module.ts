import { Module } from '@nestjs/common';
import { ResultsController } from './results.controller';
import { ResultsService } from './results.service';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [ScheduleModule.forRoot()],
  controllers: [ResultsController],
  providers: [ResultsService],
})
export class ResultsModule {}

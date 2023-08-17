import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ClicksModule } from './clicks/clicks.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), ClicksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

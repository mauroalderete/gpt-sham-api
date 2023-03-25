import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShamController } from './sham/sham.controller';
import { PuppeteerService } from './puppeteer-service/puppeteer-service';

@Module({
  imports: [],
  controllers: [AppController, ShamController],
  providers: [AppService, PuppeteerService],
})
export class AppModule {}

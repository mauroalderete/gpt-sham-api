import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShamController } from './sham/sham.controller';
import { PuppeteerService } from './puppeteer-service/puppeteer-service';
import { SessionController } from './session/session.controller';

@Module({
  imports: [],
  controllers: [AppController, ShamController, SessionController],
  providers: [AppService, PuppeteerService],
})
export class AppModule {}

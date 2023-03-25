import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShamController } from './sham/sham/sham.controller';

@Module({
  imports: [],
  controllers: [AppController, ShamController],
  providers: [AppService],
})
export class AppModule {}

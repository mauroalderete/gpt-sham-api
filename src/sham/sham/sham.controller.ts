import { Controller, Get } from '@nestjs/common';

@Controller('sham')
export class ShamController {
  // method get to load puppeteer instance
  @Get('load')
  loadPuppeteer() {
    return 'Puppeteer instance loaded';
  }
}

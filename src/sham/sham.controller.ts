import { Controller, Get } from '@nestjs/common';

@Controller('sham')
export class ShamController {
  // Load gpt website
  @Get('load')
  load() {
    return 'gpt website loaded';
  }
}

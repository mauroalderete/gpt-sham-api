import { Test, TestingModule } from '@nestjs/testing';
import { PuppeteerService } from './puppeteer-service';

describe('PuppeteerService', () => {
  let provider: PuppeteerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PuppeteerService],
    }).compile();

    provider = module.get<PuppeteerService>(PuppeteerService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});

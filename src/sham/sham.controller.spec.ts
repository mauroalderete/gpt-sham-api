import { Test, TestingModule } from '@nestjs/testing';
import { ShamController } from './sham.controller';

describe('ShamController', () => {
  let controller: ShamController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShamController],
    }).compile();

    controller = module.get<ShamController>(ShamController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

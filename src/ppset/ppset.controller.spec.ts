import { Test, TestingModule } from '@nestjs/testing';
import { PpsetController } from './ppset.controller';

describe('PpsetController', () => {
  let controller: PpsetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PpsetController],
    }).compile();

    controller = module.get<PpsetController>(PpsetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

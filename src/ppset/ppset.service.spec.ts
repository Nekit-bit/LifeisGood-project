import { Test, TestingModule } from '@nestjs/testing';
import { PpsetService } from './ppset.service';

describe('PpsetService', () => {
  let service: PpsetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PpsetService],
    }).compile();

    service = module.get<PpsetService>(PpsetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

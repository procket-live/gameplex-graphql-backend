import { Test, TestingModule } from '@nestjs/testing';
import { LookuptypeService } from './lookuptype.service';

describe('LookuptypeService', () => {
  let service: LookuptypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LookuptypeService],
    }).compile();

    service = module.get<LookuptypeService>(LookuptypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

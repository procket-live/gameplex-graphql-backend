import { Test, TestingModule } from '@nestjs/testing';
import { LookuptypeResolver } from './lookuptype.resolver';

describe('LookuptypeResolver', () => {
  let resolver: LookuptypeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LookuptypeResolver],
    }).compile();

    resolver = module.get<LookuptypeResolver>(LookuptypeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

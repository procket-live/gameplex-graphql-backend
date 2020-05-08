import { Test, TestingModule } from '@nestjs/testing';
import { PlaygroundResolver } from './playground.resolver';

describe('PlaygroundResolver', () => {
  let resolver: PlaygroundResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlaygroundResolver],
    }).compile();

    resolver = module.get<PlaygroundResolver>(PlaygroundResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { OfferResolver } from './offer.resolver';

describe('OfferResolver', () => {
  let resolver: OfferResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OfferResolver],
    }).compile();

    resolver = module.get<OfferResolver>(OfferResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

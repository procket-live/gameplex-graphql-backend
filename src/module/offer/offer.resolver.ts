import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { OfferService } from './offer.service';
import { Offer } from './offer.entity';
import { GqlAuthGuard } from '../auth/graphql-auth.guard';
import { UseGuards } from '@nestjs/common';
import { OfferInput } from './offer.input';

@Resolver('Offer')
export class OfferResolver {
    constructor(
        private readonly offerService: OfferService,
    ) { }

    @Query(() => [Offer])
    async offers() {
        return this.offerService.getPublicOffer();
    }

    @Mutation()
    @UseGuards(GqlAuthGuard)
    async addOffer(@Args('input') input: OfferInput) {
        return this.offerService.crate(input);
    }
}

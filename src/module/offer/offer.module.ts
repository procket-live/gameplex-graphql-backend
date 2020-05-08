import { Module } from '@nestjs/common';
import { OfferService } from './offer.service';
import { OfferResolver } from './offer.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Offer } from './offer.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Offer])],
    providers: [OfferService, OfferResolver]
})
export class OfferModule { }

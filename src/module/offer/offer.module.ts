import { Module } from '@nestjs/common';
import { OfferService } from './offer.service';
import { OfferResolver } from './offer.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Offer } from './offer.entity';
import { DefaultAdminSite, DefaultAdminModule } from 'nestjs-admin';

@Module({
    imports: [TypeOrmModule.forFeature([Offer]), DefaultAdminModule],
    providers: [OfferService, OfferResolver]
})
export class OfferModule {
    constructor(private readonly adminSite: DefaultAdminSite) {
        this.adminSite.register('Offer', Offer)
    }
}

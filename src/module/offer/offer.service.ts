import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Offer } from './offer.entity';
import { OfferInput } from './offer.input';

@Injectable()
export class OfferService {
    constructor(
        @InjectRepository(Offer)
        private readonly offerRepository: Repository<Offer>
    ) { }

    crate(input: OfferInput) {
        const offer = new Offer();

        offer.image = input.image;
        offer.name = input.name;
        offer.message = input.message;
        offer.private = input.private;
        offer.route = input.route;
        offer.params = input.params;

        return this.offerRepository.save(offer);
    }

    getPublicOffer() {
        return this.offerRepository.find({
            where: {
                private: false,
                is_active: true,
                deleted_at: null
            }
        })
    }
}

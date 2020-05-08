import { Injectable } from '@nestjs/common';
import { Organizer } from './organizer.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from '../user/user.service';
import { OrganizerInput } from './organizer.input';

@Injectable()
export class OrganizerService {
    constructor(
        @InjectRepository(Organizer)
        private readonly organizerRepository: Repository<Organizer>,
    ) { }

    findById(id: string) {
        return this.organizerRepository.findOne({
            where: {
                id: id,
                is_active: true,
                is_archived: false,
                deleted_at: null
            }
        })
    }

    verifyAccount(id) {
        return this.organizerRepository.update({
            id: id
        }, {
            verified: true
        })
    }

    create(input: OrganizerInput) {
        const organizer = new Organizer();
        organizer.organizer_name = input.organizer_name;
        organizer.organizer_logo = input.organizer_logo;
        organizer.upi_address = input.upi_address;

        return this.organizerRepository.save(organizer);
    }
}

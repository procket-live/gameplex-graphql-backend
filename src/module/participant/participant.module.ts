import { Module } from '@nestjs/common';
import { ParticipantService } from './participant.service';
import { ParticipantResolver } from './participant.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Participant } from './participant.entity';
import { DefaultAdminModule, DefaultAdminSite } from 'nestjs-admin';

@Module({
    imports: [TypeOrmModule.forFeature([Participant]), DefaultAdminModule],
    providers: [ParticipantService, ParticipantResolver],
    exports: [ParticipantService]
})
export class ParticipantModule {
    constructor(private readonly adminSite: DefaultAdminSite) {
        this.adminSite.register('Participant', Participant)
    }
}

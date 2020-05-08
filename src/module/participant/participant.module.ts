import { Module } from '@nestjs/common';
import { ParticipantService } from './participant.service';
import { ParticipantResolver } from './participant.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Participant } from './participant.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Participant])],
    providers: [ParticipantService, ParticipantResolver],
    exports: [ParticipantService]
})
export class ParticipantModule { }

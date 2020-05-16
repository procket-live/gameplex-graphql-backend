import { Module } from '@nestjs/common';
import { TournamentService } from './tournament.service';
import { TournamentResolver } from './tournament.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tournament } from './tournament.entity';
import { TournamentResult } from './tournamentresult.entity';
import { TournamentRoom } from './tournamentroom.entity';
import { ParticipantModule } from '../participant/participant.module';
import { GameModule } from '../game/game.module';
import { DefaultAdminModule, DefaultAdminSite } from 'nestjs-admin';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Tournament,
            TournamentResult,
            TournamentRoom
        ]),
        ParticipantModule,
        GameModule,
        DefaultAdminModule
    ],
    providers: [TournamentService, TournamentResolver],
    exports: [TournamentService]
})
export class TournamentModule {
    constructor(private readonly adminSite: DefaultAdminSite) {
        this.adminSite.register('Tournament', Tournament)
        this.adminSite.register('TournamentResult', TournamentResult)
        this.adminSite.register('TournamentRoom', TournamentRoom)
    }
}

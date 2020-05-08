import { Module } from '@nestjs/common';
import { TournamentService } from './tournament.service';
import { TournamentResolver } from './tournament.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tournament } from './tournament.entity';
import { Participent } from './participent.entity';
import { TournamentResult } from './tournamentresult.entity';
import { TournamentRoom } from './tournamentroom.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Tournament,
            Participent,
            TournamentResult,
            TournamentRoom
        ])
    ],
    providers: [TournamentService, TournamentResolver],
    exports: [TournamentService]
})
export class TournamentModule { }

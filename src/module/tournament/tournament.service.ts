import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tournament, TournamentStatus } from './tournament.entity';
import { Repository } from 'typeorm';
import { Participant } from '../participant/participant.entity';
import { TournamentResult } from './tournamentresult.entity';
import { TournamentRoom } from './tournamentroom.entity';
import { TournamentInput } from './tournament.input';
import { GameService } from '../game/game.service';
import { Playground } from '../playground/playground.entity';

@Injectable()
export class TournamentService {
    constructor(
        @InjectRepository(Tournament)
        private readonly tournamentRepository: Repository<Tournament>,
        @InjectRepository(TournamentResult)
        private readonly tournamentResultRepository: Repository<TournamentResult>,
        @InjectRepository(TournamentRoom)
        private readonly tournamentRoom: Repository<TournamentRoom>,
        private readonly gameService: GameService
    ) { }

    private updateTournament(input: TournamentInput, id: string): void {
        this.tournamentRepository.update({ id }, input);
    }

    addPlayground(playground: Playground, tournament_id) {
        return this.tournamentRepository.update({
            id: tournament_id
        }, {
            playground: playground
        });
    }

    findById(id: string) {
        return this.tournamentRepository.findOne({
            where: { id },
            relations: ["organizer", "game", "tournament_instruction"]
        })
    }

    async createTournament(input: TournamentInput): Promise<Tournament> {
        const game = await this.gameService.findById(input.game_id);
        const tournament = new Tournament();
        tournament.name = input.name;
        tournament.private = input.private;
        tournament.game = game;
        tournament.registration_start = input.registration_start;
        tournament.registration_end = input.registration_end;
        tournament.status = input.status;
        tournament.tournament_start = input.tournament_start;
        tournament.tournament_end = input.tournament_end;
        tournament.logo_link = input.logo_link;

        return this.tournamentRepository.save(tournament);
    }

    async changePrivateStatus(id: string, status: boolean = false) {
        await this.updateTournament({ private: status }, id);
        return this.findById(id);
    }

    async changeStatus(id: string, status: TournamentStatus) {
        await this.updateTournament({ status: status }, id);
        return this.findById(id);
    }
}

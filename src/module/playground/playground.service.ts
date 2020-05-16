import { Injectable } from '@nestjs/common';
import { Playground } from './playground.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PlaygroundInput } from './playground.input';
import { GameService } from '../game/game.service';
import { TournamentService } from '../tournament/tournament.service';

@Injectable()
export class PlaygroundService {
    constructor(
        @InjectRepository(Playground)
        private readonly playgroundRepository: Repository<Playground>,
        private readonly gameService: GameService,
        private readonly tournamentService: TournamentService
    ) { }

    findById(id: string) {
        return this.playgroundRepository.findOne({
            where: {
                id: id
            },
            relations: ["game", "tournaments"]
        })
    }

    async getPlayground(): Promise<Array<Playground>> {
        return await this.playgroundRepository.find({
            where: {
                is_active: true,
                is_archived: false,
                deleted_at: null
            },
            relations: ["game", "tournaments"],
            order: {
                display_order: "ASC"
            },
        })
    }

    async createPlayground(input: PlaygroundInput) {
        const game = await this.gameService.findById(input.game_id);
        const playground = new Playground();
        playground.game = game;

        return this.playgroundRepository.save(playground);
    }

    async addTournament(playground_id: string, tournament_id: string) {
        const playground = await this.findById(playground_id);
        await this.tournamentService.addPlayground(playground, tournament_id);
        return this.findById(playground_id);
    }
}

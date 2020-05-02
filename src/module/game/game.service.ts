import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Game } from './game.entity';
import { Repository } from 'typeorm';
import { GameInput, GameMetaInput } from './game.input';
import { GameMeta } from './gamemeta.entity';
import { LookuptypeService } from '../lookuptype/lookuptype.service';

@Injectable()
export class GameService {
    constructor(
        @InjectRepository(Game)
        private readonly gameRepository: Repository<Game>,
        @InjectRepository(GameMeta)
        private readonly gameMetaRepository: Repository<GameMeta>,
        private readonly lookupService: LookuptypeService
    ) { }

    create(input: GameInput) {
        const game = new Game();
        game.name = input.name;
        game.description = input.description;
        game.thumbnail = input.thumbnail;
        game.game_target = input.game_target;
        game.package_id = input.package_id;
        game.playstore_link = input.playstore_link;

        return this.gameRepository.save(game);
    }

    findById(id: string): Promise<Game> {
        return this.gameRepository.findOne({
            where: { id: id },
            relations: ["game_meta"]
        });
    }

    async addGameMeta(gameId: string, input: GameMetaInput) {
        const gameMeta = new GameMeta();
        const game = await this.findById(gameId);
        const lookupType = await this.lookupService.getLookupType(input.lookup_type_id);

        gameMeta.key = input.key;
        gameMeta.lookup_type = lookupType;
        gameMeta.game = game;

        return this.gameMetaRepository.save(gameMeta);
    }
}

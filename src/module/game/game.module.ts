import { Module } from '@nestjs/common';
import { GameService } from './game.service';
import { GameResolver } from './game.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Game } from './game.entity';
import { GameMeta } from './gamemeta.entity';
import { GameInstruction } from './gameinstruction.entity';
import { LookuptypeModule } from '../lookuptype/lookuptype.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([Game, GameMeta, GameInstruction]),
        LookuptypeModule
    ],
    providers: [GameService, GameResolver],
    exports: [GameService]
})
export class GameModule { }

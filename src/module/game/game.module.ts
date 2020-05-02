import { Module } from '@nestjs/common';
import { GameService } from './game.service';
import { GameResolver } from './game.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Game } from './game.entity';
import { LookuptypeService } from '../lookuptype/lookuptype.service';
import { GameMeta } from './gamemeta.entity';
import { LookupType } from '../lookuptype/lookuptype.entity';
import { LookupValue } from '../lookuptype/lookupvalue.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Game, GameMeta, LookupType, LookupValue])],
    providers: [GameService, GameResolver, LookuptypeService]
})
export class GameModule { }

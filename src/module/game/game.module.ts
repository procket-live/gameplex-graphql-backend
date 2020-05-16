import { Module } from '@nestjs/common';
import { GameService } from './game.service';
import { GameResolver } from './game.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Game } from './game.entity';
import { GameMeta } from './gamemeta.entity';
import { GameInstruction } from './gameinstruction.entity';
import { LookuptypeModule } from '../lookuptype/lookuptype.module';
import { DefaultAdminModule, DefaultAdminSite } from 'nestjs-admin';

@Module({
    imports: [
        TypeOrmModule.forFeature([Game, GameMeta, GameInstruction]),
        LookuptypeModule,
        DefaultAdminModule
    ],
    providers: [GameService, GameResolver],
    exports: [GameService]
})
export class GameModule {
    constructor(private readonly adminSite: DefaultAdminSite) {
        this.adminSite.register('Game', Game)
        this.adminSite.register('GameMeta', GameMeta)
        this.adminSite.register('GameInstruction', GameInstruction)
    }
}

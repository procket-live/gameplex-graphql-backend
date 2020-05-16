import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PlaygroundService } from './playground.service';
import { PlaygroundResolver } from './playground.resolver';
import { Playground } from './playground.entity';
import { GameModule } from '../game/game.module';
import { TournamentModule } from '../tournament/tournament.module';
import { DefaultAdminSite, DefaultAdminModule } from 'nestjs-admin';

@Module({
    imports: [TypeOrmModule.forFeature([Playground]), GameModule, TournamentModule, DefaultAdminModule],
    providers: [PlaygroundService, PlaygroundResolver],
    exports: [PlaygroundService]
})
export class PlaygroundModule {
    constructor(private readonly adminSite: DefaultAdminSite) {
        this.adminSite.register('Playground', Playground)
    }
}

import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { PlaygroundService } from './playground.service';
import { Playground } from './playground.entity';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/graphql-auth.guard';
import { PlaygroundInput } from './playground.input';

@Resolver('Playground')
export class PlaygroundResolver {
    constructor(
        private readonly playgroundService: PlaygroundService
    ) {

    }

    @Query(() => [Playground])
    async getPlayground() {
        return await this.playgroundService.getPlayground();
    }

    @Query(() => Playground)
    getPlaygroundDetail(@Args('playground_id') playground_id: string) {
        return this.playgroundService.findById(playground_id);
    }

    @Mutation()
    @UseGuards(GqlAuthGuard)
    createPlayground(@Args('input') input: PlaygroundInput) {
        return this.playgroundService.createPlayground(
            input
        )
    }

    @Mutation()
    @UseGuards(GqlAuthGuard)
    addTournament(@Args('playground_id') playground_id: string, @Args('tournament_id') tournament_id: string) {
        return this.playgroundService.addTournament(playground_id, tournament_id);
    }
}

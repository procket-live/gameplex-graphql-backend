import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { GameService } from './game.service';
import { GameInput, GameMetaInput, GameInstructionInput } from './game.input';
import { Game } from './game.entity';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/graphql-auth.guard';

@Resolver('Game')
export class GameResolver {
    constructor(
        private readonly gameService: GameService,
    ) { }

    @Mutation()
    @UseGuards(GqlAuthGuard)
    async createGame(
        @Args('input') input: GameInput,
    ) {
        return this.gameService.create(input);
    }

    @Query(() => Game)
    async game(@Args('input') input: { id: string; }) {
        return this.gameService.findById(input.id);
    }

    @Mutation()
    @UseGuards(GqlAuthGuard)
    async addGameMeta(
        @Args('input') input: GameMetaInput,
        @Args('id') id: string
    ) {
        return this.gameService.addGameMeta(id, input);
    }

    @Mutation()
    @UseGuards(GqlAuthGuard)
    async addGameInstruction(
        @Args('input') input: GameInstructionInput,
        @Args('id') id: string
    ) {
        return this.gameService.addGameInstruction(id, input);
    }
}

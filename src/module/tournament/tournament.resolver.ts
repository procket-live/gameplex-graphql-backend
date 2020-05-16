import { Resolver, Mutation, Query, Args } from '@nestjs/graphql';
import { TournamentService } from './tournament.service';
import { UseGuards, } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/graphql-auth.guard';
import { TournamentInput } from './tournament.input';
import { Tournament } from './tournament.entity';

@Resolver('Tournament')
export class TournamentResolver {
    constructor(
        private readonly tournamentService: TournamentService
    ) { }

    @Mutation()
    @UseGuards(GqlAuthGuard)
    createTournament(@Args('input') input: TournamentInput) {
        return this.tournamentService.createTournament(
            input
        );
    }

    @Query(() => Tournament)
    @UseGuards(GqlAuthGuard)
    getTournament(@Args('id') id: string) {
        return this.tournamentService.findById(id);
    }
}

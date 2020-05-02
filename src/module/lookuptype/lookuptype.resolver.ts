import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { LookuptypeService } from './lookuptype.service';
import { LookupTypeInput, LookupValueInput } from './lookuptype.input';
import { LookupType } from './lookuptype.entity';
import { GqlAuthGuard } from '../auth/graphql-auth.guard';
import { UseGuards } from '@nestjs/common';

@Resolver('Lookuptype')
export class LookuptypeResolver {
    constructor(
        private readonly lookupTypeService: LookuptypeService
    ) { }

    @Mutation()
    @UseGuards(GqlAuthGuard)
    createLookupType(
        @Args('input') input: LookupTypeInput
    ) {
        console.log('hahah', input);
        return this.lookupTypeService.createLookupType(input);
    }

    @Mutation()
    @UseGuards(GqlAuthGuard)
    addLookupValue(
        @Args('input') input: LookupValueInput,
        @Args('id') id: string
    ) {
        return this.lookupTypeService.addLookupValue(input, id);
    }

    @Query(() => LookupType)
    @UseGuards(GqlAuthGuard)
    getLookup(
        @Args('id') id: string
    ) {
        return this.lookupTypeService.getLookupType(id);
    }
}

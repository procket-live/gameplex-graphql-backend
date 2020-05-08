import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ApplicationService } from './application.service';
import { Application } from './application.entity';
import { AuthGuard } from '@nestjs/passport';
import { UseGuards } from '@nestjs/common';
import { ApplicationInput, AppReleaseInput, AppReleaseMessageInput } from './application.input';
import { GqlAuthGuard } from '../auth/graphql-auth.guard';

@Resolver('Application')
export class ApplicationResolver {
    constructor(
        private readonly applicationService: ApplicationService
    ) { }

    @Query(() => [Application])
    getApp() {
        return this.applicationService.getApps();
    }

    @Mutation()
    createApp(
        @Args('input') input: ApplicationInput
    ) {
        return this.applicationService.createApp(input);
    }

    @Mutation()
    createAppRelease(
        @Args('input') input: AppReleaseInput,
        @Args('id') id: string
    ) {
        return this.applicationService.createAppRelease(input, id);
    }

    @Mutation()
    createAppReleaseMessage(
        @Args('input') input: AppReleaseMessageInput,
        @Args('id') id: string
    ) {
        return this.applicationService.createAppReleaseMessage(input, id);
    }
}

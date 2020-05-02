import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './user.entity';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/graphql-auth.guard';
import { CurrentUser } from '../../shared/decorators/decorators';
import { BankAccountInput } from '../bankaccount/bankaccount.input';

@Resolver('User')
export class UserResolver {
    constructor(
        private readonly userService: UserService,
    ) { }

    @Query(() => User)
    async users() {
        return []
    }

    @Query(() => User)
    @UseGuards(GqlAuthGuard)
    async me(@CurrentUser() user: User) {
        return this.userService.findById(user.id);
    }

    @Mutation()
    @UseGuards(GqlAuthGuard)
    async updateBankDetails(
        @Args('input') input: BankAccountInput,
        @CurrentUser() user: User
    ) {
        await this.userService.addBankAccount(user.id, input);
        const updatedUser = await this.userService.findById(user.id);
        return updatedUser;
    }
}

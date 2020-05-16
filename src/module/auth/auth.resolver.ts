import { Response } from 'express';
import { Res } from '@nestjs/common';
import { Resolver, Mutation, Args } from "@nestjs/graphql";
import { AuthService } from "./auth.service";
import { MobileNumberInput, OTPInput } from "../../module/user/user.input";
import { UserService } from "../user/user.service";

@Resolver('Auth')
export class AuthResolver {
    constructor(
        private readonly authService: AuthService,
        private readonly userService: UserService,
    ) { }

    @Mutation()
    generateOtp(
        @Args('input') input: MobileNumberInput,
    ) {
        return this.authService.generateOtp(input.mobile);
    }

    @Mutation()
    logout(
        @Res() ctx
    ) {
        const res = ctx[0].res as Response;
        res.cookie('token', null, { httpOnly: true });
        return true
    }

    @Mutation()
    async verifyOtp(
        @Args('input') input: OTPInput,
        @Res() ctx,
    ) {
        const res = ctx[0].res as Response;

        const token = await this.authService.verifyOtp(input.mobile, input.otp);
        const user = await this.userService.findUserByMobileNumber(input.mobile);

        if (token) {
            res.cookie('token', token, { httpOnly: true });
        }

        return {
            token: token || '',
            user: user || {}
        }
    }

    @Mutation()
    resendOtp(@Args('input') input: { id: string; }) {
        return this.authService.resendOtp(input.id);
    }
}
import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { sign } from 'jsonwebtoken';
import { JwtService } from '@nestjs/jwt';
import { User } from '../user/user.entity';
import { OtpService } from '../../module/otp/otp.service';
import { Otp } from '../../module/otp/otp.entity';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
        private readonly otpService: OtpService,
    ) { }

    generatePayload(user: User): { id: string; } {
        return {
            id: user.id
        };
    }

    signPayload(payload: any): string {
        return sign(payload, "secrectKey", { expiresIn: '30d' })
    }

    async validateUser(id: string): Promise<User> {
        const user = await this.userService.findById(id);
        if (!user) {
            throw Error('Authenticate validation error');
        }

        return user;
    }

    async validateUserByMobile(mobile: string): Promise<User> {
        const user = await this.userService.findUserByMobileNumber(mobile);
        if (!user) {
            throw Error('Authenticate validation error');
        }

        return user;
    }

    async generateOtp(mobile: string): Promise<Otp> {
        const isUserExist = await this.userService.isUserExist(mobile);
        if (!isUserExist) {
            await this.userService.createUser(mobile);
        }

        const otp = await this.otpService.sendOtp(mobile);
        return otp;
    }

    async verifyOtp(mobile, otp): Promise<string> {
        const isVerify = await this.otpService.verifyOtp(mobile, otp);
        if (!isVerify) {
            return null;
        }

        const user = await this.validateUserByMobile(mobile);

        if (!user) {
            return null
        }

        const payload = this.generatePayload(user);
        const accessToken = this.jwtService.sign(payload);

        return accessToken;
    }

    async resendOtp(id: string): Promise<Otp> {
        return await this.otpService.resendOtp(id);
    }
}

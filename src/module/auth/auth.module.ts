import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { AuthService } from './auth.service';

import { User } from '../user/user.entity';
import { Otp } from '../otp/otp.entity';
import { UserService } from '../user/user.service';
import { OtpService } from '../otp/otp.service';
import { AuthResolver } from './auth.resolver';
import { JwtStrategy } from './jwt.strategy';
import { BankaccountService } from '../bankaccount/bankaccount.service';
import { BankAccount } from '../bankaccount/bankaccount.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([User, Otp, BankAccount]),
        PassportModule.register({
            defaultStrategy: 'jwt',
        }),
        JwtModule.register({
            secret: "secrectKey",
            signOptions: {
                expiresIn: 3600000
            }
        })
    ],
    providers: [AuthService, UserService, OtpService, AuthResolver, JwtStrategy, BankaccountService]
})
export class AuthModule { }

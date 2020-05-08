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
import { WalletModule } from '../wallet/wallet.module';
import { WalletService } from '../wallet/wallet.service';
import { Wallet } from '../wallet/wallet.entity';
import { UserModule } from '../user/user.module';
import { OtpModule } from '../otp/otp.module';

@Module({
    imports: [
        PassportModule.register({
            defaultStrategy: 'jwt',
        }),
        JwtModule.register({
            secret: "secrectKey",
            signOptions: {
                expiresIn: 3600000
            }
        }),
        UserModule,
        OtpModule,
    ],
    providers: [
        AuthService,
        AuthResolver,
        JwtStrategy,
    ]
})
export class AuthModule { }

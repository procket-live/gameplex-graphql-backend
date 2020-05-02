import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Otp } from '../otp/otp.entity';
import { OtpService } from '../otp/otp.service';
import { BankaccountService } from '../bankaccount/bankaccount.service';
import { BankAccount } from '../bankaccount/bankaccount.entity';

@Module({
    imports: [TypeOrmModule.forFeature([User, Otp, BankAccount])],
    providers: [UserResolver, UserService, OtpService, BankaccountService],
})
export class UserModule { }

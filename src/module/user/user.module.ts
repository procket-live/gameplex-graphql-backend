import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Otp } from '../otp/otp.entity';
import { DefaultAdminModule, DefaultAdminSite } from 'nestjs-admin'

// import { OtpService } from '../otp/otp.service';
// import { BankaccountService } from '../bankaccount/bankaccount.service';
// import { BankAccount } from '../bankaccount/bankaccount.entity';
// import { WalletService } from '../wallet/wallet.service';
import { Wallet } from '../wallet/wallet.entity';
import { GameUserId } from './gameuserid.entity';
// import { OtpResolver } from '../otp/otp.resolver';
import { BankaccountModule } from '../bankaccount/bankaccount.module';
import { WalletModule } from '../wallet/wallet.module';
import { OtpModule } from '../otp/otp.module';
import { OrganizerModule } from '../organizer/organizer.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            User,
            Otp,
            Wallet,
            GameUserId,
        ]),
        BankaccountModule,
        WalletModule,
        OtpModule,
        DefaultAdminModule,
        OrganizerModule
    ],
    providers: [UserResolver, UserService],
    exports: [
        UserResolver,
        UserService,
    ]
})
export class UserModule {
    constructor(private readonly adminSite: DefaultAdminSite) {
        this.adminSite.register('User', User)
    }
}
import { Module } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Wallet } from './wallet.entity';
import { DefaultAdminModule, DefaultAdminSite } from 'nestjs-admin';

@Module({
    imports: [TypeOrmModule.forFeature([Wallet]), DefaultAdminModule],
    providers: [WalletService],
    exports: [WalletService]
})
export class WalletModule {
    constructor(private readonly adminSite: DefaultAdminSite) {
        this.adminSite.register('Wallet', Wallet)
    }
}

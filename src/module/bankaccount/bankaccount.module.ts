import { Module } from '@nestjs/common';
import { BankaccountService } from './bankaccount.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DefaultAdminModule, DefaultAdminSite } from 'nestjs-admin'

import { BankAccount } from './bankaccount.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([BankAccount]),
        DefaultAdminModule
    ],
    providers: [BankaccountService],
    exports: [BankaccountService]
})
export class BankaccountModule {
    constructor(private readonly adminSite: DefaultAdminSite) {
        this.adminSite.register('Bank Account', BankAccount)
    }
}

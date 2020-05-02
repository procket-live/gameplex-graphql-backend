import { Module } from '@nestjs/common';
import { BankaccountService } from './bankaccount.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankAccount } from './bankaccount.entity';

@Module({
    imports: [TypeOrmModule.forFeature([BankAccount])],
    providers: [BankaccountService]
})
export class BankaccountModule { }

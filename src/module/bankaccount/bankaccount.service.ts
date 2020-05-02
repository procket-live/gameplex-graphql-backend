import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BankAccount } from './bankaccount.entity';
import { BankAccountInput } from './bankaccount.input';

@Injectable()
export class BankaccountService {
    constructor(
        @InjectRepository(BankAccount)
        private readonly bankAccountRepository: Repository<BankAccount>,
    ) { }

    create(input: BankAccountInput) {
        const bankaccount = new BankAccount();
        bankaccount.account_number = input.account_number;
        bankaccount.ifsc = input.ifsc;
        bankaccount.user_name = input.user_name;
        return this.bankAccountRepository.save(bankaccount);
    }
}

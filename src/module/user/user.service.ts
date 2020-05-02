import { Injectable } from '@nestjs/common';
import * as UsernameGenerator from 'username-generator';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

import { BankaccountService } from '../bankaccount/bankaccount.service';
import { BankAccountInput } from '../bankaccount/bankaccount.input';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        private readonly bankAccountService: BankaccountService
    ) { }

    async createUser(mobile: string): Promise<User> {
        const user = new User();
        user.mobile = mobile;
        user.username = UsernameGenerator.generateUsername();
        return this.userRepository.save(user);
    }

    async isUserExist(mobile: string): Promise<Boolean> {
        const [_, count] = await this.userRepository.findAndCount({ where: { mobile } });
        return !!count;
    }

    async findUserByMobileNumber(mobile: string): Promise<User> {
        return this.userRepository.findOne({ where: { mobile } });
    }

    async findById(id: string) {
        const user = await this.userRepository.findOne({
            where: { id: id },
            relations: ["bank_account"]
        })
        return user;
    }

    /**
     * add bank account
     * @param id - user id
     * @param input - bank account input
     */
    async addBankAccount(id: string, input: BankAccountInput) {
        const bankAccount = await this.bankAccountService.create(input);
        return this.userRepository.update(id, { bank_account: bankAccount });
    }
}

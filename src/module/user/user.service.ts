import { Injectable } from '@nestjs/common';
import * as UsernameGenerator from 'username-generator';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository, FindOneOptions } from 'typeorm';

import { BankaccountService } from '../bankaccount/bankaccount.service';
import { BankAccountInput } from '../bankaccount/bankaccount.input';
import { WalletService } from '../wallet/wallet.service';
import { UserInput } from './user.input';
import { OrganizerService } from '../organizer/organizer.service';
import { OrganizerInput } from '../organizer/organizer.input';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        private readonly bankAccountService: BankaccountService,
        private readonly walletService: WalletService,
        private readonly organizerService: OrganizerService,
    ) { }

    async createUser(mobile: string): Promise<User> {
        const user = new User();
        const wallet = await this.walletService.create();
        user.mobile = mobile;
        user.username = UsernameGenerator.generateUsername();
        user.wallet = wallet;

        return this.userRepository.save(user);
    }

    async isUserExist(mobile: string): Promise<Boolean> {
        const [_, count] = await this.userRepository.findAndCount({ where: { mobile } });
        return !!count;
    }

    async findUserByMobileNumber(mobile: string): Promise<User> {
        return this.userRepository.findOne({ where: { mobile } });
    }

    async findById(id: string, select: [keyof User] | null = null) {
        const user = await this.userRepository.findOne({
            where: { id: id },
            relations: ["bank_account", "organizer"],
            select
        })
        return user;
    }

    async updateMobileVerificationState(id: string, status: boolean = false) {
        await this.userRepository.update({ id }, { is_mobile_verified: status });
    }

    async updateEmailVerificationState(id: string, status: boolean = false) {
        await this.userRepository.update({ id }, { is_email_verified: status });
    }

    async updateUser(input: UserInput, id: string): Promise<User> {
        const update: UserInput = {};

        if (input.firebase_token) {
            update.firebase_token = input.firebase_token
        }

        if (input.dob) {
            update.dob = input.dob;
        }

        if (input.email) {
            update.email = input.email;
        }

        if (input.profile_image) {
            update.profile_image = input.profile_image;
        }

        if (input.username) {
            update.username = input.username;
        }

        await this.userRepository.update({ id }, update);

        return this.findById(id);
    }

    /**
     * add bank account
     * @param id - user id
     * @param input - bank account input
     */
    async addBankAccount(id: string, input: BankAccountInput) {
        const bankAccount = await this.bankAccountService.create(input);
        return this.userRepository.update({ id }, { bank_account: bankAccount });
    }

    async addOrganizer(input: OrganizerInput, user_id: string) {
        const organizer = await this.organizerService.create(input);
        return this.userRepository.update({ id: user_id }, { organizer: organizer });
    }

    async getOrganizerProfile(user_id: string) {
        const user = await this.findById(user_id, ["organizer"]);
        return user.organizer;
    }
}

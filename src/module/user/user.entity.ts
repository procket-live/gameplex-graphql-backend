import { Entity, Column, OneToOne, JoinColumn, OneToMany } from 'typeorm';

import { BaseEntity } from '../../shared/base.entity';
import { BankAccount } from '../bankaccount/bankaccount.entity';
import { Wallet } from '../wallet/wallet.entity';
import { GameUserId } from './gameuserid.entity';
import { Organizer } from '../organizer/organizer.entity';

enum Gender {
    MALE = "male",
    FEMALE = "female"
}

enum AccountSource {
    MOBILE = 'mobile',
    TRUECALLER = 'truecaller',
    GOOGLE = 'google',
    FACEBOOK = 'facebook'
}

@Entity("User")
export class User extends BaseEntity {
    @Column({ type: "text", nullable: true })
    username: string;

    @Column({ type: "text", nullable: true })
    password: string;

    @Column({
        unique: true,
        type: "text"
    })
    mobile: string;

    @Column({
        type: "text",
        nullable: true
    })
    email: string;

    @Column({
        type: "bool",
        default: false,
    })
    is_mobile_verified: Boolean;

    @Column({
        type: "bool",
        default: false
    })
    is_email_verified: Boolean;

    @Column({
        type: "date",
        nullable: true
    })
    dob: Date;

    @Column({
        type: "enum",
        enum: Gender,
        default: Gender.MALE
    })
    gender: string;

    @Column({
        type: "bigint",
        default: 0
    })
    points: number;

    @Column({
        type: "text",
        nullable: true
    })
    firebase_token: string;

    @Column({
        type: "enum",
        enum: AccountSource,
        default: AccountSource.MOBILE
    })
    account_source: string;

    @Column({
        type: "text",
        nullable: true
    })
    profile_image: string;

    @OneToOne(() => BankAccount)
    @JoinColumn()
    bank_account: BankAccount;

    @OneToOne(() => Wallet)
    @JoinColumn()
    wallet: Wallet;

    @OneToMany(type => GameUserId, gameUserId => gameUserId.game)
    game_username: GameUserId[];

    @OneToOne(() => Organizer)
    @JoinColumn()
    organizer: Organizer;
}

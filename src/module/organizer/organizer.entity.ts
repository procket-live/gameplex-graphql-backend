import { Entity, Column, OneToOne, JoinColumn } from "typeorm";
import { BankAccount } from "../bankaccount/bankaccount.entity";
import { BaseEntity } from "../../shared/base.entity";

@Entity("Organizer")
export class Organizer extends BaseEntity {
    @Column({
        type: "text",
        nullable: true
    })
    organizer_name: string;

    @Column({
        type: "text",
        nullable: true
    })
    organizer_logo: string;

    @Column({
        type: "text",
        nullable: true
    })
    upi_address: string;

    @OneToOne(() => BankAccount)
    @JoinColumn()
    bank_account: BankAccount;

    @Column({
        type: "boolean",
        default: false
    })
    verified: boolean;
}
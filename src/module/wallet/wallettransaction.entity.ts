import { Entity, Column, OneToOne } from "typeorm";
import { BaseEntity } from "../../shared/base.entity";

enum WalletTarget {
    CASH_BALANCE = 'cash_balance',
    BONOUS_BALANCE = 'bonous_balance',
    WIN_BALANCE = 'win_balance'
}

@Entity()
export class WalletTransaction extends BaseEntity {
    @Column({
        type: "enum",
        enum: WalletTarget,
        default: WalletTarget.CASH_BALANCE
    })
    target: string;

    @Column({
        type: "integer",
        default: 0
    })
    amount: number;
}
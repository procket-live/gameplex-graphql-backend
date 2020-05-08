import { Entity, Column } from "typeorm";
import { BaseEntity } from "../../shared/base.entity";

@Entity("Wallet")
export class Wallet extends BaseEntity {
    @Column({
        type: "integer",
        default: 0,
    })
    wallet_cash_balance: number;

    @Column({
        type: "integer",
        default: 0,
    })
    wallet_bonous_balance: number;

    @Column({
        type: "integer",
        default: 0
    })
    wallet_win_balance: number;

    @Column({
        type: "integer",
        default: 0
    })
    coin_balance: number;
}
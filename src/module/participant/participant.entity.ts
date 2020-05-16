import { Entity, OneToOne, JoinColumn } from "typeorm";
import { BaseEntity } from "../../shared/base.entity";
import { User } from "../user/user.entity";
import { WalletTransaction } from "../wallet/wallettransaction.entity";

@Entity("Participant")
export class Participant extends BaseEntity {
    @OneToOne(() => User)
    @JoinColumn()
    user: User;

    // @OneToOne(() => WalletTransaction)
    // @JoinColumn()
    // wallet_transaction: WalletTransaction;
}
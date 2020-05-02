import { Entity, Column } from "typeorm";
import { BaseEntity } from "../../shared/base.entity";

@Entity("BankAccount")
export class BankAccount extends BaseEntity {
    @Column({ type: "text" })
    account_number: string;

    @Column({ type: "text" })
    user_name: string;

    @Column({ type: "text" })
    ifsc: string;
}
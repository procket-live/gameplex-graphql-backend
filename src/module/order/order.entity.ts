import { Entity, Column, OneToOne, JoinColumn } from "typeorm";
const orderid = require('order-id')('mysecret')

import { BaseEntity } from "../../shared/base.entity";
import { User } from "../user/user.entity";

export enum TransactionStatus {
    PENDING = 'pending',
    FAILED = 'failed',
    SUCCESS = 'success'
}

export enum PaymentSource {
    PAYTM = 'paytm',
    RAZORPAY = 'razorpay'
}

@Entity("Order")
export class Order extends BaseEntity {
    @Column({
        type: "text",
        default: null
    })
    order_id: string;

    @Column({
        type: "text",
        default: PaymentSource.PAYTM,
        enum: PaymentSource
    })
    payment_sorce: string;

    @Column({
        type: "enum",
        enum: TransactionStatus,
        default: TransactionStatus.PENDING
    })
    status: string;

    @Column({
        type: "integer",
        default: 0
    })
    amount: number;

    @Column({
        type: "text",
        nullable: true
    })
    generate_response: string;

    @Column({
        type: "text",
        nullable: true
    })
    success_response: string;

    @Column({
        type: "text",
        nullable: true
    })
    error_response: string;

    @OneToOne(() => User)
    @JoinColumn()
    user: User;
}
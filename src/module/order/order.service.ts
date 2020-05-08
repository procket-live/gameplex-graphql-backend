import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order, TransactionStatus } from './order.entity';
import { Repository } from 'typeorm';
import { OrderInput } from './order.input';
import { UserService } from '../user/user.service';

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(Order)
        private readonly orderRepository: Repository<Order>,
        private readonly userService: UserService,
    ) { }

    findByOrderId(order_id: string) {
        return this.orderRepository.findOne({
            where: {
                order_id: order_id
            }
        })
    }

    findById(id) {
        return this.orderRepository.findOne({ where: { id: id } })
    }

    async createOrder(input: OrderInput, user_id: string) {
        const user = await this.userService.findById(user_id);
        const order = new Order();
        order.amount = input.amount;
        order.payment_sorce = input.payment_source;
        order.user = user;

        return this.orderRepository.save(order);
    }

    async updateOrder(input: OrderInput, order_record_id: string) {
        const update = {};

        if (input.order_id) {
            update['order_id'] = input.order_id;
        }

        if (input.generate_response) {
            update['generate_response'] = input.generate_response
        }

        await this.orderRepository.update(
            { id: order_record_id },
            update
        );

        return this.findById(order_record_id);
    }

    async successOrder(success_response: string, order_id: string) {
        await this.orderRepository.update(
            { id: order_id },
            {
                status: TransactionStatus.SUCCESS,
                success_response: success_response
            }
        );

        return this.findById(order_id);
    }

    async failOrder(error_response: string, order_id: string) {
        await this.orderRepository.update(
            { id: order_id },
            {
                status: TransactionStatus.FAILED,
                error_response: error_response
            }
        );

        return this.findById(order_id);
    }

    getTransactions(user_id: string) {
        return this.orderRepository.find({
            where: {
                user: user_id,
                deleted_at: null,
                is_active: true,
                is_archived: false
            }
        })
    }
}

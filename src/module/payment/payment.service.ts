import { Injectable } from '@nestjs/common';
import { GenerateRazorpaySignature, GetRazorpayOrder, RazorpayResponse } from '../../utils/razorpay.utils';
import { OrderService } from '../order/order.service';
import { PaymentSource, Order } from '../order/order.entity';

@Injectable()
export class PaymentService {
    constructor(
        private readonly orderService: OrderService
    ) { }

    async generatePaymentOrder(user_id: string, amount: number) {
        let order = await this.orderService.createOrder({ amount }, user_id);

        if (order.payment_sorce == PaymentSource.RAZORPAY) {
            const { success, razorpayOrder } = await GetRazorpayOrder(amount, order);

            if (!success) {
                return null;
            }

            order = await this.orderService.updateOrder(
                {
                    order_id: razorpayOrder.id,
                    generate_response: JSON.stringify(razorpayOrder)
                },
                order.id
            );
        }

        return order;
    }

    async validatePaymentOrder(paymentResponse: any, source: string) {

        if (source == PaymentSource.RAZORPAY) {
            const razorpayResponze = { ...paymentResponse } as RazorpayResponse;
            const order = await this.orderService.findByOrderId(razorpayResponze.razorpay_order_id);

            if (razorpayResponze.code == 0) {
                return this.paymentFailed(order.id, razorpayResponze, "Payment Failed");
            }

            const signature = GenerateRazorpaySignature(razorpayResponze.razorpay_order_id, razorpayResponze.razorpay_payment_id);

            if (signature != razorpayResponze.razorpay_signature) {
                return this.paymentFailed(order.id, razorpayResponze, "Wrong Signature");
            }

            await this.orderService.successOrder(JSON.stringify(razorpayResponze), order.id);
            return this.orderService.findById(order.id);
        }
    }

    private async paymentFailed(id: string, response: any, message: string): Promise<Order> {
        await this.orderService
            .failOrder(
                JSON.stringify({
                    message: message,
                    response: response
                }),
                id);
        return this.orderService.findById(id);
    }
}

import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentResolver } from './payment.resolver';
import { OrderModule } from '../order/order.module';

@Module({
    imports: [OrderModule],
    providers: [PaymentService, PaymentResolver],
    exports: [PaymentService]
})
export class PaymentModule { }

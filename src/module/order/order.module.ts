import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderResolver } from './order.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './order.entity';
import { UserModule } from '../user/user.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([Order]),
        UserModule
    ],
    providers: [OrderService, OrderResolver],
    exports: [OrderService]
})
export class OrderModule { }

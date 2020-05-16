import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderResolver } from './order.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './order.entity';
import { UserModule } from '../user/user.module';
import { DefaultAdminSite, DefaultAdminModule } from 'nestjs-admin';

@Module({
    imports: [
        TypeOrmModule.forFeature([Order]),
        UserModule,
        DefaultAdminModule
    ],
    providers: [OrderService, OrderResolver],
    exports: [OrderService]
})
export class OrderModule {
    constructor(private readonly adminSite: DefaultAdminSite) {
        this.adminSite.register('Order', Order)
    }
}

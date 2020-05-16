import { Module } from '@nestjs/common';
import { OtpResolver } from './otp.resolver';
import { OtpService } from './otp.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Otp } from './otp.entity';
import { DefaultAdminModule, DefaultAdminSite } from 'nestjs-admin';

@Module({
    imports: [TypeOrmModule.forFeature([Otp]), DefaultAdminModule],
    providers: [OtpResolver, OtpService],
    exports: [
        OtpService
    ]
})
export class OtpModule {
    constructor(private readonly adminSite: DefaultAdminSite) {
        this.adminSite.register('Otp', Otp)
    }
}

import { Module } from '@nestjs/common';
import { OtpResolver } from './otp.resolver';
import { OtpService } from './otp.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Otp } from './otp.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Otp])],
    providers: [OtpResolver, OtpService]
})
export class OtpModule { }

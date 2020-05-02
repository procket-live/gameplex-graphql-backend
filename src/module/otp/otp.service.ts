import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import moment from 'moment';
import { LessThan, Repository } from 'typeorm'
import { format } from 'date-fns'

import { Otp } from './otp.entity';
import { sendSMS } from '../../utils/sms.utils';

export const LessThanDate = (date: Date) => LessThan(format(date, 'yyyy-MM-dd HH:mm:ss'));

@Injectable()
export class OtpService {
    constructor(
        @InjectRepository(Otp)
        private readonly otpRepository: Repository<Otp>
    ) { }

    async sendOtp(mobile: string): Promise<Otp> {
        const otp = new Otp();
        otp.otp = this.generateOtp();
        otp.target = mobile;
        otp.expires_at = moment().add('15', 'minutes').toDate();

        this.sendOtpSms(otp);
        return this.otpRepository.save(otp);
    }

    private sendOtpSms(otp: Otp) {
        const template = `<#> Welcome to Gameplex. OTP is ${otp.otp} \n l9eEefMfOwz`;
        sendSMS(otp.target, template);
    }

    private generateOtp(): string {
        return String(Math.floor(1000 + Math.random() * 9000));
    }

    async verifyOtp(mobile, otp): Promise<Boolean> {
        const otpObject = await this.otpRepository.findOne({
            where: {
                target: mobile,
                otp: otp,
                deleted_at: null
            }
        });
        console.log('otpObject', otpObject);
        const isExpired = this.isExpired(otpObject);
        if (otpObject && !isExpired) {
            await this.deleteOtp(otpObject.id);
            return true;
        }

        return false;
    }

    private isExpired(otp: Otp): Boolean {
        const expiresAt = otp?.expires_at;
        return moment().isAfter(expiresAt);
    }

    private async deleteOtp(id: any): Promise<Boolean> {
        await this
            .otpRepository
            .update({ id: id }, { deleted_at: moment().toDate() });
        return true;
    }

    async resendOtp(id: string): Promise<Otp | null> {
        const otp = await this.otpRepository.findOne({ where: { id: id } });

        if (this.isExpired(otp)) {
            const newOtp = await this.sendOtp(otp.target);
            return newOtp;
        }

        this.sendOtpSms(otp);
        return otp;
    }
}

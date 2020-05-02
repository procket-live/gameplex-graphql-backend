import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../shared/base.entity';

export enum OtpTargetType {
    MOBILE = 'mobile',
    EMAIL = 'email'
}

@Entity("Otp")
export class Otp extends BaseEntity {
    @Column()
    target: string;

    @Column({
        type: "enum",
        enum: OtpTargetType,
        default: OtpTargetType.MOBILE
    })
    target_type: string;

    @Column()
    otp: string;

    @Column({
        type: "timestamptz",
        nullable: true
    })
    expires_at: Date;
}
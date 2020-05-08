import { Entity, Column } from "typeorm";
import { BaseEntity } from "../../shared/base.entity";

@Entity("Offer")
export class Offer extends BaseEntity {
    @Column({
        type: "boolean",
        default: true
    })
    private: boolean;

    @Column({ nullable: true })
    name: string;

    @Column({ nullable: true })
    message: string;

    @Column({ nullable: true })
    image: string;

    @Column({ nullable: true })
    route: string;

    @Column({ nullable: true })
    params: string;
}
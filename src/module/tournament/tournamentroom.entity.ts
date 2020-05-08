import { Entity, Column } from "typeorm";
import { BaseEntity } from "../../shared/base.entity";

@Entity("TournamentRoom")
export class TournamentRoom extends BaseEntity {
    @Column({ nullable: true })
    room_id: string;

    @Column({ nullable: true })
    room_password: string;
}
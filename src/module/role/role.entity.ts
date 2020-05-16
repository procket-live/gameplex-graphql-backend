import { Entity, Column } from "typeorm";
import { BaseEntity } from "../../shared/base.entity";

@Entity("Role")
export class Role extends BaseEntity {
    @Column("text")
    name: string;

    @Column({
        type: "text",
        unique: true
    })
    role_name: string;

    @Column({
        nullable: true,
        type: "text"
    })
    description: string;
}
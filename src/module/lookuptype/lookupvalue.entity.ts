import { Entity, Column, ManyToOne } from "typeorm";
import { BaseEntity } from "../../shared/base.entity";
import { LookupType } from "./lookuptype.entity";

@Entity("LookupValue")
export class LookupValue extends BaseEntity {
    @Column({ type: "text" })
    name: string;

    @Column({ type: "text", nullable: true })
    description: string;

    @Column({ type: "text" })
    value: string

    @ManyToOne(type => LookupType, lookupType => lookupType.values)
    lookup_type: LookupType;
}
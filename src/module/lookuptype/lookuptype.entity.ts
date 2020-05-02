import { Entity, Column, OneToMany } from "typeorm";
import { BaseEntity } from "../../shared/base.entity";
import { LookupValue } from "./lookupvalue.entity";

@Entity("LookupType")
export class LookupType extends BaseEntity {
    @Column({ type: "text" })
    name: string;

    @Column({ type: "text", nullable: true })
    description: string;

    @OneToMany(type => LookupValue, lookupValue => lookupValue.lookup_type)
    values: LookupValue[];
}
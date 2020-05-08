import { Entity, Column, OneToMany } from "typeorm";
import { BaseEntity } from "../../shared/base.entity";
import { AppRelease } from "./apprelease.entity";

@Entity("Application")
export class Application extends BaseEntity {
    @Column({ type: "text" })
    name: string;

    @Column({ type: "text", nullable: true })
    description: string

    @Column({ type: "text", nullable: true })
    package_id: string

    @OneToMany(type => AppRelease, appRelease => appRelease.app)
    updates: AppRelease[];
}
import { Entity, Column, ManyToOne } from "typeorm";
import { BaseEntity } from "../../shared/base.entity";
import { AppRelease } from "./apprelease.entity";

@Entity("AppReleaseMessage")
export class AppReleaseMessage extends BaseEntity {
    @Column()
    message: string

    @ManyToOne(type => AppRelease, appRelease => appRelease.updates)
    app_release: AppRelease;
}
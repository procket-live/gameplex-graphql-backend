import { Entity, Column, OneToMany, ManyToOne } from "typeorm";
import { BaseEntity } from "../../shared/base.entity";
import { AppReleaseMessage } from "./appreleasemessage.entity";
import { Application } from "./application.entity";

@Entity()
export class AppRelease extends BaseEntity {
    @Column({
        nullable: true
    })
    name: string;

    @Column()
    version: string;

    @Column()
    app_link: string;

    @OneToMany(() => AppReleaseMessage, appReleaseMessage => appReleaseMessage.app_release)
    updates: AppReleaseMessage[];

    @ManyToOne(() => Application, app => app.updates)
    app: Application;
}
import { Module } from '@nestjs/common';
import { ApplicationService } from './application.service';
import { ApplicationResolver } from './application.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Application } from './application.entity';
import { AppReleaseMessage } from './appreleasemessage.entity';
import { AppRelease } from './apprelease.entity';
import { DefaultAdminModule, DefaultAdminSite } from 'nestjs-admin';

@Module({
    imports: [
        TypeOrmModule.forFeature([Application, AppReleaseMessage, AppRelease]),
        DefaultAdminModule
    ],
    providers: [ApplicationService, ApplicationResolver],
    exports: [ApplicationService]
})
export class ApplicationModule {
    constructor(private readonly adminSite: DefaultAdminSite) {
        this.adminSite.register('Application', Application)
        this.adminSite.register('AppRelease', AppRelease)
        this.adminSite.register('AppReleaseMessage', Application)
    }
}

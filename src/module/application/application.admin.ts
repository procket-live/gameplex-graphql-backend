import { AdminEntity } from "nestjs-admin";
import { Application } from './application.entity';
import { AppRelease } from './apprelease.entity';
import { AppReleaseMessage } from './appreleasemessage.entity';

export class ApplicationAdmin extends AdminEntity {
    entity = Application
    listDisplay = ['id', 'name', 'description', 'package_id'];
    searchFields = ['name'];
}

export class AppReleaseAdmin extends AdminEntity {
    entity = AppRelease
    listDisplay = ['id', 'name', 'version', 'app_link'];
    searchFields = ['version'];
}

export class AppReleaseMessageAdmin extends AdminEntity {
    entity = AppReleaseMessage;
    listDisplay = ['id', 'message'];
    searchFields = ['message']
}
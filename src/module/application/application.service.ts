import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Application } from './application.entity';
import { AppRelease } from './apprelease.entity';
import { AppReleaseMessage } from './appreleasemessage.entity';
import { Repository } from 'typeorm';
import { ApplicationInput, AppReleaseInput, AppReleaseMessageInput } from './application.input';

@Injectable()
export class ApplicationService {
    constructor(
        @InjectRepository(Application)
        private readonly applicationRepository: Repository<Application>,
        @InjectRepository(AppRelease)
        private readonly appReleaseRepository: Repository<AppRelease>,
        @InjectRepository(AppReleaseMessage)
        private readonly appReleaseMessageRepository: Repository<AppReleaseMessage>
    ) {

    }

    getApps() {
        return this.applicationRepository.find({
            where: {
                is_active: true,
                is_archived: false,
                deleted_at: null,
            },
            relations: [
                "updates",
                "updates.updates"
            ]
        })
    }

    createApp(input: ApplicationInput) {
        const app = new Application();
        app.name = input.name;
        app.description = input.description;
        app.package_id = input.package_id;

        return this.applicationRepository.save(app);
    }

    async createAppRelease(input: AppReleaseInput, id: string) {
        const app = await this.applicationRepository.findOne({ where: { id: id } });

        const appRelease = new AppRelease();
        appRelease.name = input.name;
        appRelease.version = input.version;
        appRelease.app_link = input.app_link;
        appRelease.app = app;

        return this.appReleaseRepository.save(appRelease);
    }

    async createAppReleaseMessage(input: AppReleaseMessageInput, id: string) {
        const appRelease = await this.appReleaseRepository.findOne({ where: { id } });

        const appReleaseMessage = new AppReleaseMessage();
        appReleaseMessage.message = input.message;
        appReleaseMessage.app_release = appRelease;

        return this.appReleaseMessageRepository.save(appReleaseMessage);
    }
}

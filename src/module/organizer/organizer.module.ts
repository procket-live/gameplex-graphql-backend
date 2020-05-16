import { Module } from '@nestjs/common';
import { OrganizerService } from './organizer.service';
import { OrganizerResolver } from './organizer.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Organizer } from './organizer.entity';
import { UserModule } from '../user/user.module';
import { DefaultAdminModule, DefaultAdminSite } from 'nestjs-admin';

@Module({
    imports: [TypeOrmModule.forFeature([Organizer]), DefaultAdminModule],
    providers: [OrganizerService, OrganizerResolver],
    exports: [OrganizerService]
})
export class OrganizerModule {
    constructor(private readonly adminSite: DefaultAdminSite) {
        this.adminSite.register('Organizer', Organizer)
    }
}

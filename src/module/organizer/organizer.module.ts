import { Module } from '@nestjs/common';
import { OrganizerService } from './organizer.service';
import { OrganizerResolver } from './organizer.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Organizer } from './organizer.entity';
import { UserModule } from '../user/user.module';

@Module({
    imports: [TypeOrmModule.forFeature([Organizer])],
    providers: [OrganizerService, OrganizerResolver],
    exports: [OrganizerService]
})
export class OrganizerModule { }

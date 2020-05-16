import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LookuptypeService } from './lookuptype.service';
import { LookupType } from './lookuptype.entity';
import { LookupValue } from './lookupvalue.entity';
import { LookuptypeResolver } from './lookuptype.resolver';
import { DefaultAdminModule, DefaultAdminSite } from 'nestjs-admin';

@Module({
    imports: [TypeOrmModule.forFeature([LookupType, LookupValue]), DefaultAdminModule],
    providers: [LookuptypeService, LookuptypeResolver],
    exports: [LookuptypeService]
})
export class LookuptypeModule {
    constructor(private readonly adminSite: DefaultAdminSite) {
        this.adminSite.register('LookupType', LookupType)
        this.adminSite.register('LookupValue', LookupValue)
    }
}

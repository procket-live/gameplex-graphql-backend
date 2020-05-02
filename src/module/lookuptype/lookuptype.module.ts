import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LookuptypeService } from './lookuptype.service';
import { LookupType } from './lookuptype.entity';
import { LookupValue } from './lookupvalue.entity';
import { LookuptypeResolver } from './lookuptype.resolver';

@Module({
    imports: [TypeOrmModule.forFeature([LookupType, LookupValue])],
    providers: [LookuptypeService, LookuptypeResolver]
})
export class LookuptypeModule { }

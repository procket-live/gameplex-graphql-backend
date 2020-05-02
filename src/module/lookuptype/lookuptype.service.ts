import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { LookupType } from './lookuptype.entity';
import { LookupTypeInput, LookupValueInput } from './lookuptype.input';
import { LookupValue } from './lookupvalue.entity';

@Injectable()
export class LookuptypeService {
    constructor(
        @InjectRepository(LookupType)
        private readonly lookupTypeRepository: Repository<LookupType>,
        @InjectRepository(LookupValue)
        private readonly lookupValueRepository: Repository<LookupValue>
    ) { }

    getLookupType(id: string) {
        return this.lookupTypeRepository.findOne({
            where: { id },
            relations: ["values"]
        })
    }

    async createLookupType(input: LookupTypeInput) {
        const lookuptype = new LookupType();
        lookuptype.name = input.name;
        lookuptype.description = input.description;

        const record = await this.lookupTypeRepository.save(lookuptype);
        console.log('record', record);
        return record;
    }

    async addLookupValue(input: LookupValueInput, id: string) {
        const lookupType = await this.lookupTypeRepository.findOne({ where: { id } });

        const lookupValue = new LookupValue();
        lookupValue.name = input.name;
        lookupValue.description = input.description;
        lookupValue.value = input.value;
        lookupValue.lookup_type = lookupType;

        return this.lookupValueRepository.save(lookupValue);
    }
}

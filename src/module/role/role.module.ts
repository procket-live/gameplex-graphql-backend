import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './role.entity';
import { DefaultAdminSite, DefaultAdminModule } from 'nestjs-admin';

@Module({
    imports: [
        TypeOrmModule.forFeature([Role]),
        DefaultAdminModule
    ],
    providers: [RoleService]
})
export class RoleModule {
    constructor(private readonly adminSite: DefaultAdminSite) {
        this.adminSite.register('Role', Role);
    }
}

import { User } from './user.entity';
import { AdminEntity } from 'nestjs-admin';

export class UserAdmin extends AdminEntity {
    entity = User
}
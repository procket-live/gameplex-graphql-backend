import { User } from './user.entity';
import { AdminEntity } from 'nestjs-admin';

export class UserAdmin extends AdminEntity {
    entity = User;
    listDisplay = ['id', 'name', 'username', 'mobile', 'email', 'is_mobile_verified', 'is_email_verified', 'dob', 'gender', 'points', 'firebase_token', 'account_source'];
    searchFields = ['name'];
}
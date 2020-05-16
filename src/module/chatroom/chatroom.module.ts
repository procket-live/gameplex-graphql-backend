import { Module } from '@nestjs/common';
import { ChatroomService } from './chatroom.service';
import { ChatroomResolver } from './chatroom.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatRoom } from './chatroom.entity';
import { ChatMessage } from './chatmessage.entity';
import { UserModule } from '../user/user.module';
import { ChatRoomParticipent } from './chatroomparticipent.entity';
import { DefaultAdminSite, DefaultAdminModule } from 'nestjs-admin';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            ChatRoom,
            ChatMessage,
            ChatRoomParticipent
        ]),
        UserModule,
        DefaultAdminModule
    ],
    providers: [ChatroomService, ChatroomResolver],
    exports: [ChatroomService]
})
export class ChatroomModule {
    constructor(private readonly adminSite: DefaultAdminSite) {
        this.adminSite.register('ChatRoom', ChatRoom);
    }
}

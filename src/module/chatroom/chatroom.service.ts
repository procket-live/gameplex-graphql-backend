import { Injectable } from '@nestjs/common';
import { ChatRoom } from './chatroom.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ChatMessage } from './chatmessage.entity';
import { ChatRoomInput, ChatMessageInput } from './chatroom.input';
import { UserService } from '../user/user.service';
import { ChatRoomParticipent } from './chatroomparticipent.entity';

@Injectable()
export class ChatroomService {
    constructor(
        @InjectRepository(ChatRoom)
        private readonly chatRoomRepository: Repository<ChatRoom>,
        @InjectRepository(ChatMessage)
        private readonly chatMessageRepository: Repository<ChatMessage>,
        @InjectRepository(ChatRoomParticipent)
        private readonly chatRoomParticipentRepository: Repository<ChatRoomParticipent>,
        private readonly userService: UserService
    ) { }

    findChatRoomById(id: string) {
        return this.chatRoomRepository.findOne({
            where: {
                id
            },
            relations: ["messages", "admin", "participents", "participents.user"]
        })
    }

    async findParticipent(chat_room_id: string, user_id: string) {
        const participent = await this.chatRoomParticipentRepository.findOne({
            where: {
                user: user_id,
                chat_room: chat_room_id
            },
            relations: ["user"]
        });

        return participent;
    }

    async createChatRoom(input: ChatRoomInput, admin_user_id: string) {
        const adminUser = await this.userService.findById(admin_user_id);

        const chatRoom = new ChatRoom();
        chatRoom.name = input.name;
        chatRoom.user_can_send_message = input.user_can_send_message;
        chatRoom.description = input.description;
        chatRoom.is_verified = input.is_verified;
        chatRoom.admin = adminUser;

        return this.chatRoomRepository.save(chatRoom);
    }

    async addParticipent(chat_room_id: string, user_id: string) {
        const participent = await this.findParticipent(chat_room_id, user_id);
        if (!!participent) {
            return participent;
        }

        const chatRoom = await this.findChatRoomById(chat_room_id);
        const user = await this.userService.findById(user_id);

        const chatRoomParticipent = new ChatRoomParticipent();
        chatRoomParticipent.chat_room = chatRoom;
        chatRoomParticipent.user = user;

        return this.chatRoomParticipentRepository.save(chatRoomParticipent)
    }

    async addMessageToChatRoom(input: ChatMessageInput, chat_room_id: string, user_id: string) {
        const participent = await this.findParticipent(chat_room_id, user_id);
        if (!participent) {
            return null;
        }

        const chatRoom = await this.findChatRoomById(chat_room_id);
        const user = await this.userService.findById(user_id);

        const chatMessage = new ChatMessage();
        chatMessage.text = input.text;
        chatMessage.image = input.image;
        chatMessage.sender = user;
        chatMessage.chat_room = chatRoom;

        return this.chatRoomRepository.save(chatMessage);
    }
}

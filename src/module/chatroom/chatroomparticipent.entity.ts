import { Entity, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "../../shared/base.entity";
import { User } from "../user/user.entity";
import { ChatRoom } from "./chatroom.entity";

@Entity("ChatRoomParticipent")
export class ChatRoomParticipent extends BaseEntity {
    @OneToOne(() => User)
    @JoinColumn()
    user: User;

    @ManyToOne(type => ChatRoom, chatRoom => chatRoom.participents)
    chat_room: ChatRoom;
}
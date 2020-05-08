import { Entity, OneToOne, JoinColumn, Column, OneToMany } from "typeorm";
import { BaseEntity } from "../../shared/base.entity";
import { User } from "../user/user.entity";
import { ChatMessage } from "./chatmessage.entity";
import { ChatRoomParticipent } from "./chatroomparticipent.entity";

@Entity("ChatRoom")
export class ChatRoom extends BaseEntity {
    @OneToOne(() => User)
    @JoinColumn()
    admin: User;

    @Column({ type: "text" })
    name: string;

    @Column({ type: "text", nullable: true })
    description: string;

    @Column({ type: "boolean", default: true })
    user_can_send_message: boolean;

    @Column({ type: "boolean", default: false })
    is_verified: boolean;

    @OneToMany(() => ChatMessage, chatMessage => chatMessage.chat_room)
    messages: ChatMessage[]

    @OneToMany(type => ChatRoomParticipent, chatRoomParticipent => chatRoomParticipent.chat_room)
    participents: ChatRoomParticipent[];
}
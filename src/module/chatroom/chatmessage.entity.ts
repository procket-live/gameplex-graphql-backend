import { Entity, Column, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { BaseEntity } from "../../shared/base.entity";
import { ChatRoom } from "./chatroom.entity";
import { User } from "../user/user.entity";

@Entity("ChatMessage")
export class ChatMessage extends BaseEntity {
    @Column({ type: "text", nullable: true })
    text: string;

    @Column({ type: "text", nullable: true })
    image: string;

    @ManyToOne(() => ChatRoom, chatRoom => chatRoom.messages)
    chat_room: ChatRoom

    @OneToOne(() => User)
    @JoinColumn()
    sender: User;
}
export class ChatRoomInput {
    name: string;
    description?: string;
    user_can_send_message: boolean = true;
    is_verified: boolean = false;
}

export class ChatMessageInput {
    text?: string;
    image?: string;
}
import { Entity, Column, ManyToOne } from "typeorm";
import { BaseEntity } from "../../shared/base.entity";
import { Game } from "../../module/game/game.entity";

enum GameInstuctionCategory {
    GET_USER_ID = 'get_user_id',
    JOIN_TOURNAMENT = 'join_tournament',
    CRATE_ROOM = 'create_room'
}

@Entity("GameInstruction")
export class GameInstruction extends BaseEntity {
    @Column({ nullable: true })
    name: string

    @Column({ nullable: true })
    message: string

    @Column({ nullable: true })
    note: string

    @Column({ nullable: true })
    image: string

    @Column({
        type: "enum",
        enum: GameInstuctionCategory,
        default: GameInstuctionCategory.CRATE_ROOM,
        nullable: true
    })
    category: string;

    @ManyToOne(type => Game, game => game.instructions)
    game: Game;
}
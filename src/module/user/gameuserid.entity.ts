import { Entity, Column, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { BaseEntity } from "../../shared/base.entity";
import { User } from "./user.entity";
import { Game } from "../game/game.entity";

@Entity()
export class GameUserId extends BaseEntity {
    @Column({
        type: "text"
    })
    game_username: string

    @ManyToOne(type => User, user => user.game_username)
    user: User;

    @OneToOne(type => Game)
    @JoinColumn()
    game: Game;
}
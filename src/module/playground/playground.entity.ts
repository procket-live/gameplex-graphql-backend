import { Entity, Column, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { BaseEntity } from "../../shared/base.entity";
import { Game } from "../game/game.entity";
import { Tournament } from "../tournament/tournament.entity";

@Entity("Playground")
export class Playground extends BaseEntity {
    @Column({
        type: "integer",
        default: 0
    })
    display_order: number;

    @OneToOne(() => Game)
    @JoinColumn()
    game: Game;

    @OneToMany(type => Tournament, tournament => tournament.playground)
    tournaments: Tournament[];
}

import { Entity, Column, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { BaseEntity } from "../../shared/base.entity";
import { Game } from "./game.entity";
import { LookupType } from "../lookuptype/lookuptype.entity";

@Entity("GameMeta")
export class GameMeta extends BaseEntity {
    @Column()
    key: string;

    @OneToOne(type => LookupType)
    @JoinColumn()
    lookup_type: LookupType

    @ManyToOne(type => Game, game => game.game_meta)
    game: Game
}

import { Entity, Column, OneToMany } from "typeorm";
import { BaseEntity } from "../../shared/base.entity";
import { GameMeta } from "./gamemeta.entity";
import { GameInstruction } from "./gameinstruction.entity";

export enum GameTargetTypes {
    NATIVE = 'native',
    EXTERNAL = 'external'
}

@Entity("Game")
export class Game extends BaseEntity {
    @Column()
    name: string;

    @Column({
        nullable: true
    })
    description: string;

    @Column({
        nullable: true
    })
    thumbnail: string;

    @Column({
        nullable: true
    })
    wallpaper: string;

    @Column({
        nullable: true
    })
    package_id: string;

    @Column({
        nullable: true
    })
    playstore_link: string;

    @Column({
        type: "enum",
        enum: GameTargetTypes,
        default: GameTargetTypes.EXTERNAL
    })
    game_target: string;

    @OneToMany(() => GameMeta, gameMeta => gameMeta.game)
    game_meta: GameMeta[]

    @OneToMany(type => GameInstruction, gameInstruction => gameInstruction.game)
    instructions: GameInstruction[];
}
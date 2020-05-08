import { Entity, Column, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "../../shared/base.entity";
import { Organizer } from "../user/organizer.entity";
import { Game } from "../game/game.entity";
import { Playground } from "../playground/playground.entity";

export enum TournamentStatus {
    PENDING = 'pending',
    ACTIVE = 'active',
    COMPLETED = 'completed'
}

export enum TournamentTypes {
    SCHEDULED_TOURNAMENT = 'sheduled_tournament',
    LIVE_TOURNAMENT = 'live_tournament',
    BATTLE_TOURNAMENT = 'battle_tournament'
}

@Entity("Tournament")
export class Tournament extends BaseEntity {
    @Column({
        type: "enum",
        enum: TournamentStatus,
        default: TournamentStatus.PENDING
    })
    status: string;

    @Column({
        type: 'enum',
        enum: TournamentTypes,
        default: TournamentTypes.SCHEDULED_TOURNAMENT
    })
    tournament_type: string;

    @OneToOne(() => Organizer)
    @JoinColumn()
    organizer: Organizer;

    @OneToOne(() => Game)
    @JoinColumn()
    game: Game;

    @Column({ nullable: true })
    name: string;

    @Column({ nullable: true })
    description: string;

    @Column({
        type: "boolean",
        default: false
    })
    private: boolean;

    @Column({ nullable: true })
    logo_link: string;

    @Column({
        type: "integer",
        nullable: true
    })
    min_size: number;

    @Column({
        type: "integer",
        nullable: true
    })
    max_size: number;

    @Column({
        type: "timestamptz",
        nullable: true
    })
    registration_start: Date;

    @Column({
        type: "timestamptz",
        nullable: true
    })
    registration_end: Date;

    @Column({
        type: "timestamptz",
        nullable: true
    })
    tournament_start: Date;

    @Column({
        type: "timestamptz",
        nullable: true
    })
    tournament_end: Date;

    @Column({ type: "text", nullable: true })
    tournament_instruction: string;

    @ManyToOne(() => Playground, playground => playground.tournaments)
    playground: Playground
}
export class TournamentInput {
    status?: string;
    tournament_type?: string;
    name?: string;
    description?: string;
    private?: boolean = true;
    logo_link?: string;
    min_size?: number;
    max_size?: number;
    registration_start?: Date;
    registration_end?: Date;
    tournament_start?: Date;
    tournament_end?: Date;
}
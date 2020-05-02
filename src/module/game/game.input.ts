export class GameInput {
    name: string;
    description?: string;
    thumbnail: string;
    wallpaper?: string;
    package_id?: string;
    playstore_link?: string;
    game_target?: string;
}

export class GameMetaInput {
    key: string;
    lookup_type_id: string
}
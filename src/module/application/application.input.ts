export class ApplicationInput {
    name: string;
    description: string;
    package_id: string;
}

export class AppReleaseInput {
    name: string;
    version: string;
    app_link: string;
}

export class AppReleaseMessageInput {
    message: string;
}
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
const AdminUser = require('nestjs-admin').AdminUserEntity;

require('dotenv').config();

class ConfigService {

    constructor(private env: { [k: string]: string | undefined }) { }

    private getValue(key: string, throwOnMissing = true): string {
        const value = this.env[key];
        if (!value && throwOnMissing) {
            throw new Error(`config error - missing env.${key}`);
        }

        return value;
    }

    public ensureValues(keys: string[]) {
        keys.forEach(k => this.getValue(k, true));
        return this;
    }

    public getPort() {
        return this.getValue('PORT', true);
    }

    public isProduction() {
        const mode = this.getValue('MODE', false);
        return mode != 'DEV';
    }

    public getTypeOrmConfig(): TypeOrmModuleOptions {
        return {
            type: 'postgres',
            // url: "",
            host: "localhost",
            port: 5432,
            username: "postgres",
            password: "gameplex",
            database: "postgres",

            entities: ['**/**/**.entity{.ts,.js}', AdminUser],

            // migrationsTableName: 'migration',

            // migrations: ['src/migration/*.ts'],

            // cli: {
            //     migrationsDir: 'src/migration',
            // },
            autoLoadEntities: true,
            synchronize: true,
            logging: true,
            ssl: this.isProduction(),
        };
    }
}

const configService = new ConfigService(process.env)
    .ensureValues([
        'POSTGRES_HOST',
        'POSTGRES_PORT',
        'POSTGRES_USER',
        'POSTGRES_PASSWORD',
        'POSTGRES_DATABASE'
    ]);

export { configService };
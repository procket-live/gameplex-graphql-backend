import {MigrationInterface, QueryRunner} from "typeorm";

export class createAdminUser1588754441108 implements MigrationInterface {
    name = 'createAdminUser1588754441108'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "AppReleaseMessage" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "app_release" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "App" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "BankAccount" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "LookupValue" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "LookupType" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "GameMeta" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "GameInstruction" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "Game" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "Offer" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "Otp" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "Organizer" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "Tournament" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "Playground" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "Wallet" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "game_user_id" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "User" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "wallet_transaction" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "Participent" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "TournamentResult" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "TournamentRoom" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "Order" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "Order" ALTER COLUMN "order_id" SET DEFAULT 3977-190985-4823`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Order" ALTER COLUMN "order_id" SET DEFAULT ((3977 - 249116) - 3222)`, undefined);
        await queryRunner.query(`ALTER TABLE "Order" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "TournamentRoom" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "TournamentResult" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "Participent" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "wallet_transaction" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "User" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "game_user_id" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "Wallet" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "Playground" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "Tournament" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "Organizer" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "Otp" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "Offer" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "Game" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "GameInstruction" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "GameMeta" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "LookupType" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "LookupValue" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "BankAccount" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "App" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "app_release" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "AppReleaseMessage" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
    }

}

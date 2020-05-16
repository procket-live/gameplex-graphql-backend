import {MigrationInterface, QueryRunner} from "typeorm";

export class createAdminUser1589614864345 implements MigrationInterface {
    name = 'createAdminUser1589614864345'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Participant" DROP CONSTRAINT "FK_8ba84b300c86bfc3bc7cb5fa1e8"`, undefined);
        await queryRunner.query(`ALTER TABLE "User" DROP COLUMN "name"`, undefined);
        await queryRunner.query(`ALTER TABLE "Participant" DROP CONSTRAINT "UQ_8ba84b300c86bfc3bc7cb5fa1e8"`, undefined);
        await queryRunner.query(`ALTER TABLE "Participant" DROP COLUMN "walletTransactionId"`, undefined);
        await queryRunner.query(`ALTER TABLE "Participant" ADD "walletTransactionId" uuid`, undefined);
        await queryRunner.query(`ALTER TABLE "Participant" ADD CONSTRAINT "UQ_8ba84b300c86bfc3bc7cb5fa1e8" UNIQUE ("walletTransactionId")`, undefined);
        await queryRunner.query(`ALTER TABLE "User" ADD "name" text`, undefined);
        await queryRunner.query(`ALTER TABLE "AppReleaseMessage" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "app_release" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "Application" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "BankAccount" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "Wallet" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "LookupValue" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "LookupType" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "GameMeta" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "GameInstruction" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "Game" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "game_user_id" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "Organizer" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "User" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "ChatRoomParticipent" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "ChatRoom" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "ChatMessage" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "Offer" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "Order" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "Order" ALTER COLUMN "order_id" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "Otp" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "wallet_transaction" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "Participant" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "Tournament" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "Playground" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "TournamentResult" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "TournamentRoom" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "AppReleaseMessage" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "app_release" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "Application" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "BankAccount" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "Wallet" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "LookupValue" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "LookupType" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "GameMeta" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "GameInstruction" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "Game" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "game_user_id" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "Organizer" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "User" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "ChatRoomParticipent" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "ChatRoom" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "ChatMessage" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "Offer" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "Order" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "Order" ALTER COLUMN "order_id" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "Otp" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "Participant" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "Tournament" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "Playground" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "Role" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "TournamentResult" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "TournamentRoom" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "WalletTransaction" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "Participant" ADD CONSTRAINT "FK_8ba84b300c86bfc3bc7cb5fa1e8" FOREIGN KEY ("walletTransactionId") REFERENCES "wallet_transaction"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Participant" DROP CONSTRAINT "FK_8ba84b300c86bfc3bc7cb5fa1e8"`, undefined);
        await queryRunner.query(`ALTER TABLE "WalletTransaction" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "TournamentRoom" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "TournamentResult" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "Role" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "Playground" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "Tournament" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "Participant" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "Otp" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "Order" ALTER COLUMN "order_id" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "Order" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "Offer" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "ChatMessage" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "ChatRoom" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "ChatRoomParticipent" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "User" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "Organizer" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "game_user_id" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "Game" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "GameInstruction" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "GameMeta" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "LookupType" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "LookupValue" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "Wallet" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "BankAccount" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "Application" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "app_release" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "AppReleaseMessage" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "TournamentRoom" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "TournamentResult" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "Playground" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "Tournament" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "Participant" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "wallet_transaction" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "Otp" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "Order" ALTER COLUMN "order_id" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "Order" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "Offer" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "ChatMessage" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "ChatRoom" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "ChatRoomParticipent" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "User" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "Organizer" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "game_user_id" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "Game" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "GameInstruction" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "GameMeta" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "LookupType" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "LookupValue" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "Wallet" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "BankAccount" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "Application" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "app_release" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "AppReleaseMessage" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "User" DROP COLUMN "name"`, undefined);
        await queryRunner.query(`ALTER TABLE "Participant" DROP CONSTRAINT "UQ_8ba84b300c86bfc3bc7cb5fa1e8"`, undefined);
        await queryRunner.query(`ALTER TABLE "Participant" DROP COLUMN "walletTransactionId"`, undefined);
        await queryRunner.query(`ALTER TABLE "Participant" ADD "walletTransactionId" uuid`, undefined);
        await queryRunner.query(`ALTER TABLE "Participant" ADD CONSTRAINT "UQ_8ba84b300c86bfc3bc7cb5fa1e8" UNIQUE ("walletTransactionId")`, undefined);
        await queryRunner.query(`ALTER TABLE "User" ADD "name" text`, undefined);
        await queryRunner.query(`ALTER TABLE "Participant" ADD CONSTRAINT "FK_8ba84b300c86bfc3bc7cb5fa1e8" FOREIGN KEY ("walletTransactionId") REFERENCES "wallet_transaction"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

}
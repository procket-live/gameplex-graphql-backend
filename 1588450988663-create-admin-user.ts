import {MigrationInterface, QueryRunner} from "typeorm";

export class createAdminUser1588450988663 implements MigrationInterface {
    name = 'createAdminUser1588450988663'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "User" DROP CONSTRAINT "FK_cd3c9b3dbdc64e7df4df4793ea2"`, undefined);
        await queryRunner.query(`ALTER TABLE "User" DROP CONSTRAINT "UQ_cd3c9b3dbdc64e7df4df4793ea2"`, undefined);
        await queryRunner.query(`ALTER TABLE "User" DROP COLUMN "bankAccountId"`, undefined);
        await queryRunner.query(`ALTER TABLE "User" ADD "bankAccountId" uuid`, undefined);
        await queryRunner.query(`ALTER TABLE "User" ADD CONSTRAINT "UQ_cd3c9b3dbdc64e7df4df4793ea2" UNIQUE ("bankAccountId")`, undefined);
        await queryRunner.query(`ALTER TABLE "Game" ALTER COLUMN "deleted_at" SET NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "Game" ALTER COLUMN "deleted_at" SET DEFAULT now()`, undefined);
        await queryRunner.query(`ALTER TABLE "Otp" ALTER COLUMN "deleted_at" SET NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "Otp" ALTER COLUMN "deleted_at" SET DEFAULT now()`, undefined);
        await queryRunner.query(`ALTER TABLE "Otp" ALTER COLUMN "expires_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "User" ALTER COLUMN "deleted_at" SET NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "User" ALTER COLUMN "deleted_at" SET DEFAULT now()`, undefined);
        await queryRunner.query(`ALTER TABLE "BankAccount" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "LookupValue" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "LookupType" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "GameMeta" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "Game" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "Otp" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "Otp" DROP COLUMN "expires_at"`, undefined);
        await queryRunner.query(`ALTER TABLE "Otp" ADD "expires_at" TIMESTAMP WITH TIME ZONE`, undefined);
        await queryRunner.query(`ALTER TABLE "User" ALTER COLUMN "deleted_at" SET DEFAULT null`, undefined);
        await queryRunner.query(`ALTER TABLE "User" ADD CONSTRAINT "FK_cd3c9b3dbdc64e7df4df4793ea2" FOREIGN KEY ("bankAccountId") REFERENCES "BankAccount"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "User" DROP CONSTRAINT "FK_cd3c9b3dbdc64e7df4df4793ea2"`, undefined);
        await queryRunner.query(`ALTER TABLE "User" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "Otp" DROP COLUMN "expires_at"`, undefined);
        await queryRunner.query(`ALTER TABLE "Otp" ADD "expires_at" TIMESTAMP`, undefined);
        await queryRunner.query(`ALTER TABLE "Otp" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "Game" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "GameMeta" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "LookupType" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "LookupValue" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "BankAccount" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "User" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "User" ALTER COLUMN "deleted_at" DROP NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "Otp" ALTER COLUMN "expires_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "Otp" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "Otp" ALTER COLUMN "deleted_at" DROP NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "Game" ALTER COLUMN "deleted_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "Game" ALTER COLUMN "deleted_at" DROP NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "User" DROP CONSTRAINT "UQ_cd3c9b3dbdc64e7df4df4793ea2"`, undefined);
        await queryRunner.query(`ALTER TABLE "User" DROP COLUMN "bankAccountId"`, undefined);
        await queryRunner.query(`ALTER TABLE "User" ADD "bankAccountId" uuid`, undefined);
        await queryRunner.query(`ALTER TABLE "User" ADD CONSTRAINT "UQ_cd3c9b3dbdc64e7df4df4793ea2" UNIQUE ("bankAccountId")`, undefined);
        await queryRunner.query(`ALTER TABLE "User" ADD CONSTRAINT "FK_cd3c9b3dbdc64e7df4df4793ea2" FOREIGN KEY ("bankAccountId") REFERENCES "BankAccount"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

}

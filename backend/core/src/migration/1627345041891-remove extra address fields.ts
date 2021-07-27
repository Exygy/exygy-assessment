import {MigrationInterface, QueryRunner} from "typeorm";

export class removeExtraAddressFields1627345041891 implements MigrationInterface {
    name = 'removeExtraAddressFields1627345041891'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "place_name"`);
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "county"`);
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "zip_code"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "address" ADD "zip_code" text`);
        await queryRunner.query(`ALTER TABLE "address" ADD "county" text`);
        await queryRunner.query(`ALTER TABLE "address" ADD "place_name" text`);
    }

}

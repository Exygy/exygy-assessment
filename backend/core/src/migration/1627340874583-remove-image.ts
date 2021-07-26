import {MigrationInterface, QueryRunner} from "typeorm";

export class removeImage1627340874583 implements MigrationInterface {
    name = 'removeImage1627340874583'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "listings" DROP CONSTRAINT "FK_ecc271b96bd18df0efe47b85186"`);
        await queryRunner.query(`ALTER TABLE "listings" DROP COLUMN "image_id"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "listings" ADD "image_id" uuid`);
        await queryRunner.query(`ALTER TABLE "listings" ADD CONSTRAINT "FK_ecc271b96bd18df0efe47b85186" FOREIGN KEY ("image_id") REFERENCES "assets"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}

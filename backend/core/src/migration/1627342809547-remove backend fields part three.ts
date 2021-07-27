import {MigrationInterface, QueryRunner} from "typeorm";

export class removeBackendFieldsPartThree1627342809547 implements MigrationInterface {
    name = 'removeBackendFieldsPartThree1627342809547'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "state"`);
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "street2"`);
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "latitude"`);
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "longitude"`);
        await queryRunner.query(`ALTER TABLE "property" DROP COLUMN "accessibility"`);
        await queryRunner.query(`ALTER TABLE "property" DROP COLUMN "amenities"`);
        await queryRunner.query(`ALTER TABLE "property" DROP COLUMN "building_total_units"`);
        await queryRunner.query(`ALTER TABLE "property" DROP COLUMN "developer"`);
        await queryRunner.query(`ALTER TABLE "property" DROP COLUMN "household_size_max"`);
        await queryRunner.query(`ALTER TABLE "property" DROP COLUMN "household_size_min"`);
        await queryRunner.query(`ALTER TABLE "property" DROP COLUMN "neighborhood"`);
        await queryRunner.query(`ALTER TABLE "property" DROP COLUMN "pet_policy"`);
        await queryRunner.query(`ALTER TABLE "property" DROP COLUMN "smoking_policy"`);
        await queryRunner.query(`ALTER TABLE "property" DROP COLUMN "units_available"`);
        await queryRunner.query(`ALTER TABLE "property" DROP COLUMN "unit_amenities"`);
        await queryRunner.query(`ALTER TABLE "property" DROP COLUMN "year_built"`);
        await queryRunner.query(`ALTER TABLE "property" DROP COLUMN "services_offered"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "property" ADD "services_offered" text`);
        await queryRunner.query(`ALTER TABLE "property" ADD "year_built" integer`);
        await queryRunner.query(`ALTER TABLE "property" ADD "unit_amenities" text`);
        await queryRunner.query(`ALTER TABLE "property" ADD "units_available" integer`);
        await queryRunner.query(`ALTER TABLE "property" ADD "smoking_policy" text`);
        await queryRunner.query(`ALTER TABLE "property" ADD "pet_policy" text`);
        await queryRunner.query(`ALTER TABLE "property" ADD "neighborhood" text`);
        await queryRunner.query(`ALTER TABLE "property" ADD "household_size_min" integer`);
        await queryRunner.query(`ALTER TABLE "property" ADD "household_size_max" integer`);
        await queryRunner.query(`ALTER TABLE "property" ADD "developer" text`);
        await queryRunner.query(`ALTER TABLE "property" ADD "building_total_units" integer`);
        await queryRunner.query(`ALTER TABLE "property" ADD "amenities" text`);
        await queryRunner.query(`ALTER TABLE "property" ADD "accessibility" text`);
        await queryRunner.query(`ALTER TABLE "address" ADD "longitude" numeric`);
        await queryRunner.query(`ALTER TABLE "address" ADD "latitude" numeric`);
        await queryRunner.query(`ALTER TABLE "address" ADD "street2" text`);
        await queryRunner.query(`ALTER TABLE "address" ADD "state" text`);
    }

}

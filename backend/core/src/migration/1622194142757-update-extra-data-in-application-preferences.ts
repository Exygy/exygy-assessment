import { MigrationInterface, QueryRunner } from "typeorm"

export class updateExtraDataInApplicationPreferences1622194142757 implements MigrationInterface {
  name = "updateExtraDataInApplicationPreferences1622194142757"

  public async up(queryRunner: QueryRunner): Promise<void> {
    const result: Array<{
      id: string
    }> = await queryRunner.query("SELECT id, preferences from applications")
    // NOTE: Find every option in preferences where extraData is
    //  either undefined or null and replace it with an empty array
    for (const item of result) {
      await queryRunner.query("UPDATE applications SET preferences = ($1) WHERE id = ($2)", [
        JSON.stringify([]),
        item.id,
      ])
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}

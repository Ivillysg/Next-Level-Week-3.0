import { MigrationInterface, QueryRunner } from 'typeorm';

export class createTables1602673319438 implements MigrationInterface {
  name = 'createTables1602673319438';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `orphanages` (`id` int UNSIGNED NOT NULL AUTO_INCREMENT, `name` varchar(50) NOT NULL, `latitude` double NOT NULL, `longitude` double NOT NULL, `about` text NOT NULL, `instructions` text NOT NULL, `opening_hours` varchar(255) NOT NULL, `open_on_weekends` tinyint NOT NULL DEFAULT 0, PRIMARY KEY (`id`)) ENGINE=InnoDB',
    );
    await queryRunner.query(
      'CREATE TABLE `images` (`id` int UNSIGNED NOT NULL AUTO_INCREMENT, `path` varchar(255) NOT NULL, `orphanage_id` int UNSIGNED NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
    );
    await queryRunner.query(
      'ALTER TABLE `images` ADD CONSTRAINT `FK_aa7e04fdd620f748adad5b96bbb` FOREIGN KEY (`orphanage_id`) REFERENCES `orphanages`(`id`) ON DELETE CASCADE ON UPDATE CASCADE',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `images` DROP FOREIGN KEY `FK_aa7e04fdd620f748adad5b96bbb`',
    );
    await queryRunner.query('DROP TABLE `images`');
    await queryRunner.query('DROP TABLE `orphanages`');
  }
}

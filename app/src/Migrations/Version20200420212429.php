<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200420212429 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE dynamic_form (id INT AUTO_INCREMENT NOT NULL, slug VARCHAR(255) NOT NULL, privacy_section_content LONGTEXT NOT NULL, created_at DATETIME NOT NULL, INDEX dynamic_form_slug (slug), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('INSERT INTO `dynamic_form`(`id`, `slug`, `privacy_section_content`, `created_at`) VALUES (1, \'default\', \'Con esclusivo riferimento al suo nome e cognome e dati di contatto, tali informazioni sono state fornite da “Testpoint” di Advance S.r.l.\', \'2020-04-20 21:42:23\');');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE dynamic_form');
    }
}

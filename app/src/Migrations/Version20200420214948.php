<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200420214948 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE privacy_user CHANGE form form INT DEFAULT NULL');
        $this->addSql('ALTER TABLE privacy_user ADD CONSTRAINT FK_CB3CC2575288FD4F FOREIGN KEY (form) REFERENCES dynamic_form (id)');
        $this->addSql('CREATE INDEX IDX_CB3CC2575288FD4F ON privacy_user (form)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE privacy_user DROP FOREIGN KEY FK_CB3CC2575288FD4F');
        $this->addSql('DROP INDEX IDX_CB3CC2575288FD4F ON privacy_user');
        $this->addSql('ALTER TABLE privacy_user CHANGE form form INT DEFAULT 1 NOT NULL');
    }
}

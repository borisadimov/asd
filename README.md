# Jungles - Simple Symfony starter kit

This a starter-kit is freely provided.  
It was intended to be used as a sandbox for technical challenges but it can also come in handy to kickstart simple Symfony-based PHP projects with no effort.

## Usage

You can start the project by running `make`. This will build and run a barebone Symfony application and a MySQL database.

Visit `http://localhost:8000` from your local web browser to see your application.  
If you don't see anything right away, just wait up to one minute, since it usually takes a bit for the integrated webserver to start.

You can anyway follow the log with `docker-compose logs -f app`.

## Requirements

This package requires a Linux environment with:

* GNU Make
* Docker
* docker-compose


## DOCTRINE COMMANDS

- `php bin/console doctrine:schema:drop --full-database --force`
- `php bin/console doctrine:schema:validate`
- `php bin/console doctrine:schema:update --force`

## DOCTRINE MIGRATION COMMANDS

- `php bin/console doctrine:migrations:diff`                [diff] Generate a migration by comparing your current database to your mapping information.
- `php bin/console doctrine:migrations:dump-schema`         [dump-schema] Dump the schema for your database to a migration.
- `php bin/console doctrine:migrations:execute`             [execute] Execute a single migration version up or down manually.
- `php bin/console doctrine:migrations:generate`            [generate] Generate a blank migration class.
- `php bin/console doctrine:migrations:latest`              [latest] Outputs the latest version number
- `php bin/console doctrine:migrations:migrate`             [migrate] Execute a migration to a specified version or the latest available version.
- `php bin/console doctrine:migrations:rollup`              [rollup] Rollup migrations by deleting all tracked versions and insert the one version that exists.
- `php bin/console doctrine:migrations:status`              [status] View the status of a set of migrations.
- `php bin/console doctrine:migrations:up-to-date`          [up-to-date] Tells you if your schema is up-to-date.
- `php bin/console doctrine:migrations:version`             [version] Manually add and delete migration versions from the version table.
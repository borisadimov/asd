all: run

run:
	docker-compose build
	docker-compose run --rm --entrypoint bash app -c "composer install"
	docker-compose up -d

cli:
	docker-compose exec app bash
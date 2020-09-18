ARG IMAGE
FROM ${IMAGE}

COPY app/ /app/

WORKDIR /app

RUN composer install --no-ansi --no-interaction --no-progress --optimize-autoloader
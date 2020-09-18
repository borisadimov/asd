FROM prooph/php:7.4-cli-xdebug
COPY --from=composer:1.9.3 /usr/bin/composer /usr/bin/composer

RUN apk --update --no-cache add git bash mysql-client && \
    docker-php-ext-install pdo_mysql && \
    wget https://get.symfony.com/cli/installer -O - | bash && \
    mv /root/.symfony/bin/symfony /usr/local/bin/symfony

COPY app/ /var/www/

WORKDIR /var/www

ENTRYPOINT [ "symfony" ]
EXPOSE 8000

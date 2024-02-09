FROM php:8.3-apache

RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf 

RUN apt-get update \
  &&  apt-get install -y --no-install-recommends \
  locales apt-utils git libicu-dev g++ libpng-dev libxml2-dev libzip-dev libonig-dev libxslt-dev unzip
  
RUN echo "en_US.UTF-8 UTF-8" > /etc/locale.gen  \
  &&  echo "fr_FR.UTF-8 UTF-8" >> /etc/locale.gen \
  &&  locale-gen 

RUN curl -sS https://getcomposer.org/installer | php -- \
  &&  mv composer.phar /usr/local/bin/composer 
  
RUN curl -sL https://deb.nodesource.com/setup_21.x | bash
RUN apt-get install nodejs -yqq

RUN curl -sS https://get.symfony.com/cli/installer | bash \
  &&  mv /root/.symfony5/bin/symfony /usr/local/bin/symfony

RUN docker-php-ext-configure \
  intl \
  &&  docker-php-ext-install \
  pdo pdo_mysql opcache intl zip calendar dom mbstring gd xsl \
  \
  &&  pecl install apcu && docker-php-ext-enable apcu

WORKDIR /var/www/

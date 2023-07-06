# Шаблон проекта NestJS с использованием TypeORM/PostgreSQL

![Nest Logo](https://nestjs.com/img/logo-small.svg)

## Описание

Этот проект-шаблон предоставляет основу для разработки приложения на NestJS с использованием TypeORM и PostgreSQL. Включает в себя базовую структуру файлов, предварительно настроенные импорты и все необходимые конфигурации для создания полноценного монолитного приложения.

## Установка и настройка

1. Запустите базу данных в Docker с помощью следующей команды в директории /database:
```shell
$ docker-compose up --build
```

2. Запустите Nest приложение с помощью следующей команды:
```shell
$ npm install
$ npm run start
```

3. Для ознакомления с REST-API используйте swagger
```shell
http://localhost:8080/doc
```

Это запустит приложение в режиме разработки (development) на порту по умолчанию.

[Документация NestJS](https://docs.nestjs.com/)

[Документация TypeORM](https://typeorm.io/)

[Документация PostgreSQL](https://www.postgresql.org/docs/)

[Документация Docker Compose](https://docs.docker.com/compose/)


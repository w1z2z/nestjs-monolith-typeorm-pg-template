NestJS Monolith Template with TypeORM and PostgreSQL

This repository provides a template for building monolithic applications using NestJS, TypeORM, and PostgreSQL. It serves as a starting point for developing scalable and maintainable backend applications.
Features

    NestJS: A progressive Node.js framework for building efficient and scalable server-side applications.
    TypeORM: An ORM (Object-Relational Mapping) library that simplifies database integration and management.
    PostgreSQL: A powerful open-source relational database management system.
    Docker Compose: A tool for defining and running multi-container Docker applications.

Getting Started

To get started with this template, follow these steps:

    Clone the repository:

    shell

git clone https://github.com/your-username/nestjs-monolith-typeorm-pg-template.git

Install the dependencies:

shell

cd nestjs-monolith-typeorm-pg-template
npm install

Configure the PostgreSQL database connection by updating the ormconfig.json file.

Start the application using Docker Compose:

shell

    docker-compose up

    The NestJS application will be running at http://localhost:3000.

Folder Structure

The template follows a standard folder structure for a NestJS monolithic application:

    src: Contains the source code of the application.
        controllers: Responsible for handling incoming requests and returning responses.
        entities: Contains TypeORM entity classes that represent database tables.
        middlewares: Custom middleware functions to be used in the application.
        services: Business logic and application services.
        utils: Utility functions and helper classes.
    test: Contains unit tests and integration tests for the application.
    config: Configuration files for the application.
    docker-compose.yml: Docker Compose configuration file for setting up the PostgreSQL database.

Contributing

Contributions are welcome! If you find any issues or want to add new features, feel free to open an issue or submit a pull request. Please follow the existing code style and ensure that all tests pass before submitting any changes.
License

This template is licensed under the MIT License.
Resources

    NestJS Documentation
    TypeORM Documentation
    PostgreSQL Documentation
    Docker Compose Documentation

Feel free to refer to the documentation links above to learn more about NestJS, TypeORM, PostgreSQL, and Docker Compose.
Acknowledgements

This template is inspired by the best practices and architectural patterns recommended by the NestJS, TypeORM, and Docker communities.

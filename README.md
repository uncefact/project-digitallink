# project-digitallink
Reference implementation of UNTP link resolver and credential store

## Overview
This project is a TypeScript application built using the Express framework. It follows a monorepository architecture managed by Lerna. The monorepository structure enables the management of multiple packages within a single repository, promoting code sharing and modular development.

## Getting Started

### Prerequisites

Before you proceed with installing project dependencies, ensure that your local development environment meets the following requirements:

1. **Node.js Version:**

Make sure your machine has Node.js version 18 or later installed. You can download the latest version from [https://nodejs.org/](https://nodejs.org/).

To check your Node.js version, run the following command in your terminal:

```bash
node --version
```

2. Install [pnpm](https://www.npmjs.com/package/pnpm) globally:

The project uses pnpm as the package manager. If you haven't installed pnpm globally, you can do so by running the following command:

```bash
npm install -g pnpm
```

[pnpm](https://www.npmjs.com/package/pnpm) is a fast, disk-space efficient package manager that helps with package installation and management.

### Installation

#### Installing dependencies
To install the project dependencies and set up the project for development, run the following command:

```bash
npm run pre:install
```

This command will trigger the `pre:install` script defined in the **package.json** file. The `pre:install` script handles the installation of dependencies using [pnpm](https://www.npmjs.com/package/pnpm) and copies the content from **.env.example** to create a **.env** file.

#### Configuring the Database

By default, this project runs with [PostgreSQL](https://www.postgresql.org/). However, you have the flexibility to customize the database configuration by editing the `.env` file. Update the values to match your desired database configuration. This project utilizes the [TypeORM](https://typeorm.io/) library for interacting with the database.

1. Open the `.env` file in the root of your project.

2. Update the values of the following fields according to your database configuration:

```dotenv
  #...others
  DB_TYPE=postgres
  DB_HOST=127.0.0.1
  DB_NAME=digitallink
  DB_PORT=5432
  DB_USER=postgres
  DB_PASSWORD=postgres
```

Make sure to adjust the values based on your database setup. Supported database types include **MySQL**, **MariaDB**, **Postgres**, **CockroachDB**, **SQLite** (See more database types at [TypeORM](https://typeorm.io/)).

Ensure you have the corresponding database library installed in the **core** package. For [PostgreSQL](https://www.postgresql.org/), install the [pg](https://www.npmjs.com/package/pg) library using the following command:


```bash
cd packages/core

npm install pg
```

Replace `pg` with the appropriate library if you are using a different database type.

### Running the Project

Before running the project, make sure you have followed the [installation instructions](#installation) to set up your development environment and your database service is running. If using PostgreSQL, ensure the PostgreSQL server is up and running with the specified configuration in the **.env** file.

Once you have verified, you can start the project by running the following command:

```bash
npm run dev
```

Now, this will start the project using [nodemon](https://www.npmjs.com/package/nodemon) on port **3000** with the specified database type and connection details.

## Note

*Ensure that the **.env** file is properly managed in version control. You might want to add it to your **.gitignore** file if it contains sensitive information.*

*Feel free to customize the database configuration based on your specific needs and database preferences.*
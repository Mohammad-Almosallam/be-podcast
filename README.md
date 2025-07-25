# 🎙️ be-podcast

A lightweight backend service that fetches podcast and episode data from the iTunes Search API, stores them in a PostgreSQL database, and serves them via a REST API. Built with **Fastify** and **TypeORM**.

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Mohammad-Almosallam/be-podcast.git
cd be-podcast
````

### 2. Install dependencies

```bash
npm i
```

### 3. Setup environment variables

Create a `.env` file in the root directory based on the provided `.env.example` file:

```bash
cp .env.example .env
```

Get enviroment values from [here](https://www.notion.so/Backend-environment-1d18cc9b2d9880fc974fc0b0dd58cc79), then fill in the required values:

```
DATABASE_URL=
PORT=
```

### 4. Run the development server

```bash
npm run dev
```

The server will start on [http://localhost:3001](http://localhost:3001)



## 📦 API Overview

### `GET /podcast?term=QUERY`

Fetches both podcasts and podcast episodes from the iTunes API for a given search term. Results are also stored in the database.



## 🛠 Built With

* [Fastify](https://www.fastify.io/) – blazing fast Node.js web framework
* [TypeORM](https://typeorm.io/) – elegant ORM for TypeScript and JavaScript
* [PostgreSQL](https://www.postgresql.org/) – powerful, open source object-relational database

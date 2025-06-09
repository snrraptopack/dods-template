# Deno + Drizzle ORM + Oak + Supabase Starter

A template for building REST APIs with Deno, Drizzle ORM, Oak, and Supabase/Postgres.

## Features

- Deno runtime
- Drizzle ORM for type-safe SQL
- Oak web framework
- Supabase/Postgres integration
- Environment variable support via `.env`
- Ready-to-use migration and dev tasks

## Getting Started

### 1. Clone the repository

```sh
git clone https://github.com/snrraptopack/dods-template.git
cd dods-template
```

### 2. Create a `.env` file

Copy `.env.example` to `.env` and fill in your database credentials:

```
DATABASE_URL=your_postgres_connection_string
PORT=8000
```

### 3. Install Deno

[Install Deno](https://deno.com/manual/getting_started/installation) if you haven’t already.

### 4. Install dependencies

Deno will automatically fetch dependencies on first run.

### 5. Run migrations

Generate and push migrations to your database:

```sh
deno task db:generate
deno task db:push
```

### 6. Start the development server

```sh
deno task dev
```

The server will start on the port specified in your `.env` file (default: 8000).

## Project Structure

```
deno.json         # Deno config and tasks
src/
  config/
    env.ts        # Loads environment variables
    drizzle.ts    # Drizzle config
  db/
    index.ts      # DB client and connection test
    schema/
      user.ts     # Example user table schema
drizzle/          # Migration files
main.ts           # App entry point
```

## Useful Tasks

- `deno task dev` — Start the dev server with hot reload
- `deno task db:generate` — Generate migration files from schema
- `deno task db:push` — Apply migrations to the database
- `deno task db:pull` — Introspect database schema
- `deno task db:studio` — Open Drizzle Studio (if supported)

## Notes

- The `.env` file is ignored by git for security.
- Update the schema in `src/db/schema/` and re-run migration tasks as needed.
- For more info, see [Deno](https://deno.com/), [Drizzle ORM](https://orm.drizzle.team/), [Oak](https://deno.land/x/oak), and [Supabase](https://supabase.com/).

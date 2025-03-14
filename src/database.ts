import { knex as setupKnex, Knex } from 'knex'
import { env } from './env'

if (!env.DATABASE_URL) {
  throw new Error('DATABASE_URL env not found.')
}
export const config: Knex.Config = {
  client: 'sqlite',
  connection: {
    filename: './db/app.db',
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const knex = setupKnex(config)

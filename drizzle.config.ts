/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './migrations',
  schema: './src/models/Schema.ts',
  dialect: 'mysql', // Change this to 'mysql'
  dbCredentials: {
    host: process.env.DB_HOST ?? 'localhost',
    port: parseInt(process.env.DB_PORT ?? '3308', 10),
    user: process.env.DB_USER ?? 'new_admin', // replace with your MySQL username
    password: process.env.DB_PASSWORD ?? 'bookme123', // replace with your MySQL password
    database: process.env.DB_NAME ?? 'bookme_authentication', // replace with your database name
  },
  verbose: true,
  strict: true,
});

// Host :localhost
// User :new_admin
// Password :Bookme123

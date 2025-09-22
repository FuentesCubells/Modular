import { Pool } from "pg";
import { drizzle } from 'drizzle-orm/node-postgres';

if (!process.env.DB_URL) throw new Error("DB_URL no está definido");

const pool = new Pool({
  connectionString: process.env.DB_URL,
  ssl: {
    rejectUnauthorized: false, // necesario para Railway
  }
});

export const db = drizzle(pool);

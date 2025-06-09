import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import {DATABASE_URL} from "../config/env.ts"

const client = postgres(DATABASE_URL!);


export const db = drizzle({client} );


export async function testDbConnection() {
    try {
        await client`SELECT 1`;
        console.log("Database connection successful.");
    } catch (error) {
        console.error("Database connection failed:", error);
    }
}

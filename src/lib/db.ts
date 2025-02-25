// lib/db.js
import Database from 'better-sqlite3';
import path from 'path';

// Define the database file path
const dbPath = path.join(process.cwd(), 'db/database.sqlite');
const db = new Database(dbPath, { verbose: console.log });

export default db;

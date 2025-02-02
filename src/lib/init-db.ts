import db from './db';

export function initializeDatabase() {
  db.prepare(
    `CREATE TABLE IF NOT EXISTS shorturls (
      shortUrlHash VARCHAR(10) PRIMARY KEY UNIQUE NOT NULL,
      fullUrl TEXT UNIQUE NOT NULL
    )`
  ).run();
  console.log('Database initialized!');
}

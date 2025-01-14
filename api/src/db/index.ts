import sqlite3 from 'sqlite3';

const db = new sqlite3.Database(process.env.DB_PATH || './data/db.sqlite');

db.serialize(() => {
  db.run('CREATE TABLE IF NOT EXISTS user (id INTEGER TEXT KEY, name TEXT, email TEXT, phone TEXT)');
});

export default db;

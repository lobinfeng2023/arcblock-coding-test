import sqlite3 from 'sqlite3';

const isProduction = process.env.NODE_ENV === 'production';
const dbPath = isProduction ? './data/db.sqlite' : '../../../data/db.sqlite';
const db = new sqlite3.Database(dbPath);

db.serialize(() => {
  db.run('CREATE TABLE IF NOT EXISTS user (id INTEGER TEXT KEY, name TEXT, email TEXT, phone TEXT)');
});

export default db;

// const sqlite3 = require('sqlite3').verbose();
import sqlite3 from 'sqlite3';

const db = new sqlite3.Database(__dirname + '/db.sqlite'); // 使用内存数据库，也可以指定文件路径

db.serialize(() => {
  db.run('CREATE TABLE IF NOT EXISTS user (id INTEGER TEXT KEY, name TEXT, email TEXT, phone TEXT)');
});

export default db;

import { randomUUID } from 'crypto';

import db from '../db';

function fineOne(key: string, value: string) {
  return new Promise((resolve, reject) => {
    db.get('SELECT * FROM user WHERE ' + key + ' = ?', [value], (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row);
      }
    });
  });
}
function updateOne(id: string, user: any) {
  return new Promise((resolve, reject) => {
    db.run(
      'UPDATE user SET name = ?, email = ?, phone = ? WHERE id = ?',
      [user.name, user.email, user.phone, id],
      function (err) {
        if (err) {
          reject(err);
        } else {
          resolve(this);
        }
      },
    );
  });
}

export const createUser = async (user: any) => {
  user.id = randomUUID();
  return new Promise((resolve, reject) => {
    db.run(
      'INSERT INTO user (id, name, email, phone) VALUES (?, ?, ?, ?)',
      [user.id, user.name, user.email, user.phone],
      function (err) {
        if (err) {
          reject(err);
        } else {
          resolve(this);
        }
      },
    );
  });
};

export const findUserByEmail = async (email: string) => {
  return fineOne('email', email);
};

export const findUserById = async (id: string) => {
  return fineOne('id', id);
};

export const updateUser = async (id: string, user: any) => {
  return updateOne(id, user);
};

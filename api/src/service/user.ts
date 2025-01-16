import { randomUUID } from 'crypto';

import db from '../db';
import { User } from '../types/user';

type UserProfile = Omit<User, 'id'>;

function findOne(key: keyof User, value: string): Promise<User | undefined> {
  return new Promise((resolve, reject) => {
    // 使用参数化查询，将 key 作为占位符传递
    db.get('SELECT * FROM user WHERE $key = ?', { $key: key }, [value], (err: Error | null, row: User | undefined) => {
      if (err) {
        reject(err);
      } else {
        resolve(row);
      }
    });
  });
}
function updateOne(id: string, user: UserProfile) {
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

export const createUser = async (data: UserProfile) => {
  const user: User = {
    id: randomUUID(),
    ...data,
  };
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
  return findOne('email', email);
};

export const findUserById = async (id: string) => {
  return findOne('id', id);
};

export const updateUser = async (id: string, user: User) => {
  return updateOne(id, user);
};

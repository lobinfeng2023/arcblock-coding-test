import prisma from '../db';

export const createUser = async (user: any) => {
  const res = await prisma.user.create({
    data: user,
  });
  return res;
};

export const findUserByEmail = async (email: string) => {
  const res = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  return res;
};

export const findUserById = async (id: string) => {
  const res = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  return res;
};

export const updateUser = async (id: string, user: any) => {
  const res = await prisma.user.update({
    where: {
      id,
    },
    data: user,
  });
  return res;
};

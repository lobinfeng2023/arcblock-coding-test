import { request } from '../utils';

export const getUserProfile = async () => {
  const url = `/api/user/ae76b375-73db-4ebf-9be9-9efd041c34c6`;
  const res = await request.get(url);
  return res;
};

export const updateUserProfile = async (user: any) => {
  const url = `/api/user/ae76b375-73db-4ebf-9be9-9efd041c34c6`;
  const res = await request({
    method: 'put',
    url,
    data: user,
  });
  return res;
};

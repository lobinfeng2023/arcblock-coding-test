import { request } from '../utils';

export const getUserProfile = async () => {
  const url = `/api/user/0d97eaa7-f9b9-4ae3-9edb-fbe908a9a61c`;
  const res = await request.get(url);
  return res;
};

export const updateUserProfile = async (user: any) => {
  const url = `/api/user/0d97eaa7-f9b9-4ae3-9edb-fbe908a9a61c`;
  const res = await request({
    method: 'put',
    url,
    data: user,
  });
  return res;
};

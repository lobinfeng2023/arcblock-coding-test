import { createAxios } from '@blocklet/js-sdk';

export const isMobilePhone = (phone: string) => {
  const reg = /^1[3456789]\d{9}$/;
  return reg.test(phone);
};

export const request = (() => {
  const api = createAxios({
    baseURL: window?.blocklet?.prefix || '/',
  });
  api.interceptors.response.use((res) => {
    if (res.data.code === 200) {
      return res.data;
    }
    return Promise.reject(res.data);
  });
  return api;
})();

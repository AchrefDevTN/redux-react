import axiosInstance from './axiosInstance';

export const authService = {
  login: async (credentials) => {
    const response = await axiosInstance.post('/auth/login', credentials);
    return response.data;
  },
  logout: async () => {
    await axiosInstance.post('/auth/logout');
  },
  register: async (userData) => {
    const response = await axiosInstance.post('/auth/register', userData);
    return response.data;
  }
};

import axiosInstance from './axiosInstance';

export const userService = {
  fetchUser: async (userId) => {
    const response = await axiosInstance.get(`/users/${userId}`);
    return response.data;
  }
};

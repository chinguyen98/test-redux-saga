import axiosClient from "./axiosClient";

export const signIn = ({ email, password }) => {
  const url = '/auth/signin';
  return axiosClient.post(url, { email, password });
}
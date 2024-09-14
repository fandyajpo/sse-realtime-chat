import axios, { AxiosRequestConfig } from "axios";

export const NextFetch = async (url: string, r: AxiosRequestConfig) => {
  axios.defaults.withCredentials = true;
  const rr = await axios(url, r);
  return {
    status: true,
    data: rr?.data,
    statusText: rr?.statusText,
    code: rr?.status,
  };
};

"use client";

import { getToken } from "@/actions/setCoockie.action";
import { BASE_URL } from "./getEnv";

const { default: axios } = require("axios");

const AxiosInstance = axios.create({
  baseURL: BASE_URL || "https://devapi.sportjacks.com",
  timeout: 300000,
  headers: {
    "Content-Type": "application/json",
  },
});

// To set the Bearer token automatically in requests
AxiosInstance.interceptors.request.use(
  async (config) => {
    const token = await getToken();

    // console.log({ token });
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const postMethod = (endpoint, data = {}, params = {}, headers = {}) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await AxiosInstance(endpoint, {
        method: "post",
        data: data,
        params: params,
        headers: headers,
      });

      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

const deleteMethod = (endpoint, data = {}, params = {}) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await AxiosInstance(endpoint, {
        method: "delete",
        data: data,
        params: params,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

const putMethod = (endpoint, data = {}, params = {}) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await AxiosInstance.put(endpoint, data, { ...params });

      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

const getMethod = (endpoint, param = {}) => {
  // console.log(endpoint)
  return new Promise(async (resolve, reject) => {
    try {
      const response = await AxiosInstance.get(endpoint, { ...param });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export default AxiosInstance;
export { postMethod, getMethod, putMethod, deleteMethod };

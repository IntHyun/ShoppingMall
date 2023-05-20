import axios from "axios";

const BASE_URL = "https://openmarket.weniv.co.kr/";

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const imgInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type:": "multipart/formData",
  },
});

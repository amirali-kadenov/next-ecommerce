import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

console.log(",api.defaults.baseURL", api.defaults.baseURL);

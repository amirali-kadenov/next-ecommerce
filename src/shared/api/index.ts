import axios from "axios";

const BASE_URL = "http://localhost:3002";

export const api = axios.create({
  baseURL: BASE_URL,
});

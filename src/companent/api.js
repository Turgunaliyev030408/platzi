import axios from "axios";

export const apis = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1/products",
});

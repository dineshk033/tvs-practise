import axios, { Axios } from "axios";
// Global configuration of axios
const AxiosInstance = axios.create({
  baseURL: "https://dummyjson.com",
  timeout: 1000,
});
AxiosInstance.interceptors.request.use((request) => {
  request.headers.trainer = "Dinesh";
  const token = localStorage.getItem("token");
  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  }
  return request;
});
export default AxiosInstance;
/**
 * get - fetch the data from backend
 * post -> create a new record
 * put -> update all props in records
 * patch -> partial update in records
 * delete -> delete a record
 */

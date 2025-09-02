import axios from "axios";
// Global configuration of axios
const PlacheolderINstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  timeout: 1000,
});

export default PlacheolderINstance;

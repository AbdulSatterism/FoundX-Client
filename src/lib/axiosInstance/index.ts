import { envConfig } from "@/src/config/envConfig";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: envConfig.baseApi as string,
});

export default axiosInstance;

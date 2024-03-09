import axios, { AxiosInstance } from "axios";
import { API_URL } from "../constants";



const useAxios = () => {

  
  const axiosInstance: AxiosInstance = axios.create({
    baseURL: API_URL,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });

  
  return axiosInstance;
};

export default useAxios;

import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { requestLogger } from "axios-logger";

const axiosRequestConfig: AxiosRequestConfig = {};

const axiosInstance: AxiosInstance = axios.create(axiosRequestConfig);

const axiosRequestLogger = (
  axiosRequestConfig: AxiosRequestConfig
): AxiosRequestConfig => requestLogger(axiosRequestConfig);

axiosInstance.interceptors.request.use(axiosRequestLogger);

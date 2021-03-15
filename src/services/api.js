import axios from 'axios'
import {BASE_URL} from './env';

const axiosApiConfig = {
  baseURL: `${BASE_URL}`,
  timeout: 5000,
};

export const api = axios.create(axiosApiConfig);
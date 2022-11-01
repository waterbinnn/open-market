import axios from 'axios';
import { baseUrl } from './constants';

export function getJWTHeader(user) {
  return { headers: `JWT ${user.token}` };
}

const config = { baseURL: baseUrl };

export const axiosInstance = axios.create(config);

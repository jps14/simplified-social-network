import axios from 'axios';

export const axiosClient = axios.create({
  baseURL: 'http://172.17.73.129:3000',
});


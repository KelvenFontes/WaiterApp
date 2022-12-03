import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://44.212.57.196:3001'
});

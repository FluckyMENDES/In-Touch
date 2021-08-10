import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0',
  withCredentials: true,
  headers: {
    'API-KEY': '397d99d8-a6d4-4c8e-a265-ff34f82ec660',
  },
});

export default instance;

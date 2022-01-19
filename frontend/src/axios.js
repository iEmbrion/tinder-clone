import axios from 'axios';

const instance = axios.create({
  // baseURL: 'http://localhost:8000',
  baseURL: 'https://tinder-backend-gary.herokuapp.com',
});

export default instance;

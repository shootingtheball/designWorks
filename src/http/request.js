import axios from 'axios';

const service = axios.create({
  baseURL: 'localhost:3001',
});


service.interceptors.request.use((req) => {
  // req.headers =
}, (err) => {
  console.log(err); // for debug
  Promise.reject(err);
});


export default service;

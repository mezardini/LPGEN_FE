import axios from 'axios';

const api = axios.create({
  baseURL: 'http://your-django-backend-url', // Replace with your Django backend URL
  withCredentials: true, // This is crucial to include session ID in requests
});

export default api;

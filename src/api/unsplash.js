import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 878663d9a2229681cbd5e66c0ec58fa908a985fdf27e9b9aa6ebcfd8c7b55356'
  }
});
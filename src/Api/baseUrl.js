import axios from 'axios';

const sata = axios.create({
  baseURL: 'https://readx.up.railway.app',
  withCredentials: true, // Ensure credentials are included in requests
  headers: {
    'Content-Type': 'application/json'
  }
});

export default sata;

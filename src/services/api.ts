import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const getScores = async () => {
  const response = await api.get('/scores');
  return response.data;
};

// ...other API calls...

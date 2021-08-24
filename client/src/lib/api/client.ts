import axios from 'axios';

const client = axios.create({
  validateStatus: () => true,
});

export const apiBaseURL =
  process.env.NODE_ENV === 'development'
    ? `${process.env.API_URL}/`
    : process.env.API_URL;
client.defaults.baseURL = apiBaseURL;

export default client;

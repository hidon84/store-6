import axios from 'axios';

const client = axios.create({
  validateStatus: () => true,
});

client.defaults.baseURL = process.env.API_URL ?? '/';

export default client;

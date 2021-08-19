import axios from 'axios';

const client = axios.create({
  validateStatus: (status) => {
    return status < 500;
  },
});

client.defaults.baseURL = process.env.API_URL ?? '/';

export default client;

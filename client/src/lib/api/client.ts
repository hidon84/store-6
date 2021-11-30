import axios from 'axios';
import config from '~/config';

const client = axios.create({
  validateStatus: () => true,
});

export const apiBaseURL =
  process.env.NODE_ENV === 'development' ? `${config.apiURL}/` : config.apiURL;
client.defaults.baseURL = apiBaseURL;

export default client;

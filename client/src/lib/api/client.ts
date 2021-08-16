import axios from 'axios';

const client = axios.create();

client.defaults.baseURL = process.env.API_URL ?? '/';

export default client;

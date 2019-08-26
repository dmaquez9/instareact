/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

axios.defaults.withCredentials = true;

const client = (endpoint: string, { body, ...customConfig }: any = {}): any => {
  const headers = { 'content-type': 'application/json' };
  const config = {
    method: body ? 'post' : 'get',
    data: body,
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };
  return axios(`http://localhost:4040/${endpoint}`, config).then((r: any): any => r);
};

export default client;

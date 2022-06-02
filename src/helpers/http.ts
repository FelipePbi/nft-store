import axios from 'axios';

import { BASE_URL } from '../constants/urls';

const clientHTTP = axios.create({
  baseURL: BASE_URL,
});

export const fetcher = async (url: string): Promise<any> => {
  const { data } = await clientHTTP.get(url);

  return data;
};

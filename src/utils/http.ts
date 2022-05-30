import axios from 'axios';

const clientHTTP = axios.create({
  baseURL: 'http://localhost:4000',
});

export const fetcher = async (url: string): Promise<any> => {
  const { data } = await clientHTTP.get(url);

  return data;
};

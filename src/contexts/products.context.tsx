import { createContext, useEffect, useMemo } from 'react';

import { useAsyncFn } from 'react-use';

import { NFT_URL } from '../constants/urls';
import { fetcher } from '../helpers/http';
import { IFunctionalComponentProps } from '../types/interfaces';

export interface IProduct {
  id: number;
  price: number;
  image: {
    url: string;
  };
  collection: {
    name: string;
  };
  brlPrice?: number;
  isSold?: boolean;
}

export interface IProductsContext {
  nfts?: IProduct[];
  isLoading?: boolean;
}

export const INITIAL_STATE = {
  nfts: [],
  isLoading: false,
};

const ProductsContext = createContext(INITIAL_STATE);

const ProductProvider: React.FC<IFunctionalComponentProps> = ({ children }) => {
  const [{ loading: isLoading, value: data }, trigger] = useAsyncFn(() => fetcher(NFT_URL));

  useEffect(() => {
    trigger();
  }, []);

  const value = useMemo(() => ({ nfts: data, isLoading }), [data, isLoading]);

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};

export { ProductProvider, ProductsContext };

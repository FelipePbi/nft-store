import { createContext, useEffect, useMemo } from 'react';

import { useAsyncFn } from 'react-use';

import { NFT_URL } from '../constants/urls';
import { IFunctionalComponentProps } from '../types/interfaces';
import { fetcher } from '../utils/http';

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

const ProductsContext = createContext({} as IProductsContext);

const ProductProvider: React.FC<IFunctionalComponentProps> = ({ children }) => {
  const [{ loading: isLoading, value: data }, trigger] = useAsyncFn(() => fetcher(NFT_URL));

  useEffect(() => {
    trigger();
  }, []);

  const value = useMemo(() => ({ nfts: data, isLoading }), [data, isLoading]);

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};

export { ProductProvider, ProductsContext };

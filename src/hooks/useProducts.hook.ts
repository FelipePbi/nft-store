import { useContext, useMemo } from 'react';

import { IProduct, ProductsContext } from '../contexts/products.context';
import useWallet from './useWallet.hook';

interface IUseProducts {
  isLoading: boolean;
  data?: IProduct[];
}

const useProducts = (): IUseProducts => {
  const { products } = useWallet();
  const { nfts, isLoading } = useContext(ProductsContext);

  const data = useMemo(
    () =>
      nfts?.map((product) => {
        product.isSold = !!products.some(({ id }) => id === product.id);
        return product;
      }),
    [nfts, products]
  );

  return {
    data,
    isLoading: !!isLoading,
  };
};

export default useProducts;

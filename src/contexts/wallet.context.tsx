import { createContext, useCallback, useMemo, useState } from 'react';

import { IFunctionalComponentProps } from '../types/interfaces';
import { IProduct } from './products.context';

export interface IWalletContext {
  products: IProduct[];
  totalEther: number;
  totalBRL: number;
  addProduct: (newProduct: IProduct) => void;
  removeProduct: (productId: number) => void;
}

const WalletContext = createContext({
  products: [],
  totalEther: 0,
  totalBRL: 0,
  addProduct: () => null,
  removeProduct: () => null,
} as IWalletContext);

const WalletProvider: React.FC<IFunctionalComponentProps> = ({ children }) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const addProduct = useCallback(
    (newProduct: IProduct) => {
      setProducts([...products, newProduct]);
    },
    [products]
  );

  const removeProduct = useCallback(
    (productId: number) => {
      setProducts(products.filter((product) => product.id !== productId));
    },
    [products]
  );

  const value = useMemo(() => {
    const totalEther = products.reduce((previous, current) => (previous += current.price), 0);
    const totalBRL = products.reduce((previous, current) => (previous += current.price), 0);

    return {
      totalEther,
      totalBRL,
      products,
      addProduct,
      removeProduct,
    };
  }, [products]);

  return <WalletContext.Provider value={value}>{children}</WalletContext.Provider>;
};

export { WalletProvider, WalletContext };

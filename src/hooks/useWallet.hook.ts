import { useContext } from 'react';

import { IWalletContext, WalletContext } from '../contexts/wallet.context';

type IUseWallet = IWalletContext;

const useWallet = (): IUseWallet => {
  const { products, totalBRL, totalEther, addProduct, removeProduct } = useContext(WalletContext);

  return {
    products,
    totalBRL,
    totalEther,
    addProduct,
    removeProduct,
  };
};

export default useWallet;

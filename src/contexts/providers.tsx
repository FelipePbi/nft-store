import React from 'react';

import { IFunctionalComponentProps } from '../types/interfaces';
import { ProductProvider } from './products.context';
import { WalletProvider } from './wallet.context';

const AppProvider: React.FC<IFunctionalComponentProps> = ({ children }) => (
  <WalletProvider>
    <ProductProvider>{children}</ProductProvider>
  </WalletProvider>
);

export default AppProvider;

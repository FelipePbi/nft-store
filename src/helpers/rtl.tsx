/* eslint-disable react/jsx-no-constructed-context-values */
import { ReactElement } from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import { INITIAL_STATE as PRODUCT_MOCK, ProductsContext } from '../contexts/products.context';
import { INITIAL_STATE as WALLET_MOCK, WalletContext } from '../contexts/wallet.context';
import ThemeProvider from '../styles';

export const EverythingWrapper: any = ({ children }: any) => {
  const history = createMemoryHistory();

  return (
    <Router location={history.location} navigator={history}>
      <ThemeProvider>
        <WalletContext.Provider value={WALLET_MOCK}>
          <ProductsContext.Provider value={PRODUCT_MOCK}>{children}</ProductsContext.Provider>;
        </WalletContext.Provider>
      </ThemeProvider>
    </Router>
  );
};

const renderWithEverything = (
  ui: ReactElement,
  options: any = { wrapperProps: {}, providersConfig: {} }
): any =>
  render(ui, {
    wrapper: (props) => <EverythingWrapper {...props} {...options.wrapperProps} />,
    ...options,
  });

export { userEvent, screen, fireEvent, renderWithEverything };

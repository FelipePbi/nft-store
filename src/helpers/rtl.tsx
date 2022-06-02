/* eslint-disable react/jsx-no-constructed-context-values */
import { ReactElement } from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ThemeProvider from '../styles';

export const EverythingWrapper: any = ({ children }: any) => {
  return <ThemeProvider>{children}</ThemeProvider>;
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

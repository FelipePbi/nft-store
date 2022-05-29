import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 120px;
  justify-content: space-between;
  width: 100%;
`;

export const LinkContainer = styled.a``;

export const WalletContainer = styled(Link)`
  align-items: center;
  display: flex;
  text-decoration: none;

  > div {
    align-items: flex-end;
    display: flex;
    flex-direction: column;
    margin-right: 6px;
  }

  img {
    height: 33px;
    width: 33px;
  }
`;

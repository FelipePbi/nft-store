import { Link } from 'react-router-dom';

import { LogoSVG, WalletSVG } from '../../assets';
import useWallet from '../../hooks/useWallet.hook';
import { WalletContainer, Wrapper } from './styles';

export const Header: React.FC = () => {
  const { products } = useWallet();

  return (
    <Wrapper>
      <Link to="/">
        <img src={LogoSVG} alt="Carteira" />
      </Link>
      <WalletContainer to="/wallet">
        <div>
          <strong>Minha Carteira</strong>
          <span>{products.length} itens</span>
        </div>
        <img src={WalletSVG} alt="Carteira" />
      </WalletContainer>
    </Wrapper>
  );
};

export default Header;

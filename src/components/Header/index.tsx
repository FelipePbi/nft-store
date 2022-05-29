import { Link } from 'react-router-dom';

import { LogoSVG, WalletSVG } from '../../assets';
import { WalletContainer, Wrapper } from './styles';

export const Header: React.FC = () => {
  return (
    <Wrapper>
      <Link to="/">
        <img src={LogoSVG} alt="Carteira" />
      </Link>
      <WalletContainer to="/wallet">
        <div>
          <strong>Minha Carteira</strong>
          <span>3 itens</span>
        </div>
        <img src={WalletSVG} alt="Carteira" />
      </WalletContainer>
    </Wrapper>
  );
};

export default Header;

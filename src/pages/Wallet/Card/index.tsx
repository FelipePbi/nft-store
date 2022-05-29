import { DeleteSVG } from '../../../assets';
import EtherPrice from '../../../components/EtherPrice';
import HashCode from '../../../components/HashCode';
import Title from '../../../components/Title';
import { Button, InfContainer, Wrapper } from './styles';

export const Card: React.FC = () => {
  return (
    <Wrapper>
      <img
        src="https://img.seadn.io/files/0701898f2a1790aae9839d5270a4440d.png?auto=format"
        alt="Imagem NFT: Bored Ape Yacht Club"
      />
      <InfContainer>
        <div>
          <Title text="Mutant Ape Yatch Club Mutant Ape Yatch Club" fontSize="18px" />
          <HashCode value="15206" fontSize="16px" />
        </div>
        <EtherPrice value={16.2} fontSize="18px" />
      </InfContainer>
      <Button>
        <img src={DeleteSVG} alt="Botão para remover a NFT da carteira" />
      </Button>
    </Wrapper>
  );
};

export default Card;

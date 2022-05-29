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
          <Title text="Mutant Ape Yatch Club Mutant Ape Yatch Club" />
          <EtherPrice value={16.2} />
        </div>
        <HashCode value="15206" />
      </InfContainer>

      <Button>COMPRAR</Button>
    </Wrapper>
  );
};

export default Card;

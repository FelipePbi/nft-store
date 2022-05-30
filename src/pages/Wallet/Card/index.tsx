import { DeleteSVG } from '../../../assets';
import EtherPrice from '../../../components/EtherPrice';
import HashCode from '../../../components/HashCode';
import Title from '../../../components/Title';
import { Button, InfContainer, Wrapper } from './styles';

interface ICard {
  image: string;
  name: string;
  price: number;
  hashCode: number;
  removeProduct: () => void;
}

export const Card: React.FC<ICard> = ({ hashCode, image, name, price, removeProduct }) => {
  return (
    <Wrapper>
      <img src={image} alt={`Imagem NFT: ${name}`} />
      <InfContainer>
        <div>
          <Title text={name} fontSize="18px" />
          <HashCode value={hashCode} fontSize="16px" />
        </div>
        <EtherPrice value={price} fontSize="18px" />
      </InfContainer>
      <Button onClick={removeProduct}>
        <img src={DeleteSVG} alt="Botão para remover a NFT da carteira" />
      </Button>
    </Wrapper>
  );
};

export default Card;

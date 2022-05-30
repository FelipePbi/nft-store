import EtherPrice from '../../../components/EtherPrice';
import HashCode from '../../../components/HashCode';
import Title from '../../../components/Title';
import { Button, InfContainer, Wrapper } from './styles';

interface ICard {
  image: string;
  name: string;
  price: number;
  hashCode: number;
  isSold?: boolean;
  addProduct: () => void;
}

export const Card: React.FC<ICard> = ({ hashCode, image, name, price, isSold, addProduct }) => {
  return (
    <Wrapper>
      <img src={image} alt={`Imagem NFT: ${name}`} />
      <InfContainer>
        <div>
          <Title text={name} />
          <EtherPrice value={price} />
        </div>
        <HashCode value={hashCode} />
      </InfContainer>
      <Button onClick={addProduct} disabled={isSold}>
        COMPRAR
      </Button>
    </Wrapper>
  );
};

export default Card;

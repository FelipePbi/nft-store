import { EtherSVG } from '../../assets';
import { Wrapper } from './styles';

interface IEtherPrice {
  value: number;
  fontSize?: string;
}

export const EtherPrice: React.FC<IEtherPrice> = ({ value, fontSize }) => {
  return (
    <Wrapper fontSize={fontSize}>
      <img src={EtherSVG} alt="Logo da moeda Ether" />
      <span>{value.toFixed(2)}</span>
    </Wrapper>
  );
};

export default EtherPrice;

import EtherPrice from '../../../components/EtherPrice';
import HashCode from '../../../components/HashCode';
import { formatCurrencyToBRL } from '../../../utils/formatters';
import { Value, Wrapper } from './styles';

interface IResumeItem {
  hashCode: string;
  priceEther: number;
  priceBRL: number;
  isTotalValue?: boolean;
}

export const ResumeItem: React.FC<IResumeItem> = ({
  hashCode,
  priceBRL,
  priceEther,
  isTotalValue,
}) => {
  return (
    <Wrapper>
      {(isTotalValue && <strong>Total</strong>) || <HashCode value={hashCode} />}
      <EtherPrice value={priceEther} />
      <Value>{formatCurrencyToBRL(priceBRL)}</Value>
    </Wrapper>
  );
};

export default ResumeItem;

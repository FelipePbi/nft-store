import Card from './Card';
import ResumeItem from './ResumeItem';
import { InfContainer, ListContainer, Wrapper } from './styles';

export const Wallet: React.FC = () => {
  return (
    <Wrapper>
      <ListContainer>
        <Card />
        <Card />
      </ListContainer>
      <InfContainer>
        <div>
          <h2>Resumo</h2>
          <ResumeItem hashCode="4564654" priceBRL={555555} priceEther={55} />
          <ResumeItem hashCode="4564654" priceBRL={555555} priceEther={55} />
          <ResumeItem hashCode="4564654" priceBRL={555555} priceEther={55} />
          <ResumeItem hashCode="4564654" priceBRL={555555} priceEther={55} />
          <ResumeItem hashCode="4564654" priceBRL={555555} priceEther={55} />
          <ResumeItem hashCode="4564654" priceBRL={555555} priceEther={55} isTotalValue />
        </div>
      </InfContainer>
    </Wrapper>
  );
};

export default Wallet;

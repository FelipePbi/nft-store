import { useMemo } from 'react';

import useWallet from '../../hooks/useWallet.hook';
import Card from './Card';
import ResumeItem from './ResumeItem';
import { InfContainer, ListContainer, Wrapper } from './styles';

export const Wallet: React.FC = () => {
  const { products, totalBRL, totalEther, removeProduct } = useWallet();

  const walletItemList = useMemo(() => {
    return products.map(({ collection, id, image, price }) => (
      <Card
        key={id.toString()}
        hashCode={id}
        image={image.url}
        price={price}
        name={collection.name}
        removeProduct={() => removeProduct(id)}
      />
    ));
  }, [products]);

  const resumeItemList = useMemo(() => {
    return products
      .map(({ collection, id, price, brlPrice }) => (
        <ResumeItem
          key={collection.name}
          hashCode={id}
          priceEther={price}
          priceBRL={brlPrice || 0}
        />
      ))
      .concat(
        <ResumeItem key="total_value" priceEther={totalEther} priceBRL={totalBRL} isTotalValue />
      );
  }, [products]);

  return (
    <Wrapper>
      <ListContainer>{walletItemList}</ListContainer>
      <InfContainer>
        <div>
          <h2>Resumo</h2>
          {resumeItemList}
        </div>
      </InfContainer>
    </Wrapper>
  );
};

export default Wallet;

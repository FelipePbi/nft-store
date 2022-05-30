import { useMemo } from 'react';

import useProducts from '../../hooks/useProducts.hook';
import useWallet from '../../hooks/useWallet.hook';
import Card from './Card';
import { Wrapper } from './styles';

export const Showcase: React.FC = () => {
  const { data } = useProducts();
  const { addProduct } = useWallet();

  const productsList = useMemo(() => {
    return data?.map(({ collection, id, image, price, isSold, brlPrice }) => (
      <Card
        key={id.toString()}
        hashCode={id}
        image={image.url}
        price={price}
        name={collection.name}
        addProduct={() => addProduct({ collection, id, image, price, brlPrice })}
        isSold={isSold}
      />
    ));
  }, [data]);

  return <Wrapper>{productsList}</Wrapper>;
};

export default Showcase;

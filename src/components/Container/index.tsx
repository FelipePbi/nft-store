import { IFunctionalComponentProps } from '../../types/interfaces';
import { Wrapper } from './styles';

export const Container: React.FC<IFunctionalComponentProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Container;

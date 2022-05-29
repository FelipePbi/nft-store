import { H3 } from './styles';

interface ITitle {
  text: string;
  fontSize?: string;
}

export const Title: React.FC<ITitle> = ({ text, fontSize }) => {
  return <H3 fontSize={fontSize}>{text}</H3>;
};

export default Title;

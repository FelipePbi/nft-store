import { Span } from './styles';

interface IHashCode {
  value: string;
  fontSize?: string;
}

export const HashCode: React.FC<IHashCode> = ({ value, fontSize }) => {
  return <Span fontSize={fontSize}>#{value}</Span>;
};

export default HashCode;

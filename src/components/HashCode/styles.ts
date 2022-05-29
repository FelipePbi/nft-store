import styled from 'styled-components/macro';

interface ISpan {
  fontSize?: string;
}

export const Span = styled.span<ISpan>`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ fontSize }) => fontSize || '14px'};
  font-weight: 300;
`;

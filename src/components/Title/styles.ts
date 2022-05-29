import styled from 'styled-components/macro';

interface IH3 {
  fontSize?: string;
}

export const H3 = styled.h3<IH3>`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ fontSize }) => fontSize || '16px'};
  font-weight: 700;
  overflow: hidden;
  padding-right: 20px;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

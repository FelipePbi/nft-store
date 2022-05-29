import styled from 'styled-components/macro';

export const Wrapper = styled.article`
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
  margin-bottom: 8px;

  strong {
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const Value = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-size: 14px;
  opacity: 0.8;
  text-align: end;
`;

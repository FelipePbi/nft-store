import styled from 'styled-components/macro';

interface IProps {
  fontSize?: string;
}

export const Wrapper = styled.div<IProps>`
  align-items: center;
  display: flex;

  img {
    width: 10px;
  }

  span {
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ fontSize }) => fontSize || '16px'};
    margin-left: 6px;
  }
`;

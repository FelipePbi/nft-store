import styled from 'styled-components/macro';

export const Wrapper = styled.article`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  display: flex;
  height: 156px;
  justify-content: space-between;
  margin-bottom: 30px;
  max-width: 100%;
  padding: 28px;

  > img {
    border-radius: 5px;
    height: 100px;
    width: 100px;
  }
`;

export const InfContainer = styled.article`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 26px;
`;

export const Button = styled.button`
  cursor: pointer;
  height: 30px;
  transition: opacity 0.4s ease;
  width: 30px;

  &:hover {
    opacity: 0.5;
  }
`;

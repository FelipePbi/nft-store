import styled from 'styled-components/macro';

export const Wrapper = styled.article`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  height: 435px;
  overflow: hidden;
  transition: transform 0.4s ease;
  width: 100%;

  > img {
    height: 320px;
    width: 100%;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

export const InfContainer = styled.article`
  display: flex;
  flex-direction: column;
  padding: 15px;

  > div {
    display: flex;
    justify-content: space-between;
  }
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 20px;
  cursor: pointer;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  height: 40px;
  margin: 0 15px;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  transition: opacity 0.4s ease;
  width: calc(100% - 30px);

  &:hover {
    opacity: ${({ disabled }) => (disabled ? 0.5 : 0.9)};
  }
`;

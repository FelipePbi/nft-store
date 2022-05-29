import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ListContainer = styled.section`
  display: flex;
  flex: 1.5;
  flex-direction: column;
  margin-right: 60px;
`;

export const InfContainer = styled.section`
  display: flex;
  flex: 1;

  > div {
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 20px;

    height: fit-content;
    padding: 28px;
    width: 100%;

    h2 {
      color: ${({ theme }) => theme.colors.black};
      margin-bottom: 16px;
    }
  }
`;

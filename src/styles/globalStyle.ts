import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: ${({ theme }) => theme.colors.white};
        font-family: 'Roboto', sans-serif;
    }
    html, body, #root {
        max-height: 100vh;
        max-width: 100vw;
        height: 100%;
        width: 100%;
    }
    *, button, input {
        border: 0;
        background: none;
    }
    html {
        background: ${({ theme }) => theme.colors.primary};
    }
`;

export default GlobalStyle;

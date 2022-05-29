import { BrowserRouter } from 'react-router-dom';

import Container from './components/Container';
import Header from './components/Header';
import AppRoutes from './routes';
import ThemeProvider from './styles';

const App: React.FC = () => (
  <BrowserRouter basename="/">
    <ThemeProvider>
      <Container>
        <Header />
        <AppRoutes />
      </Container>
    </ThemeProvider>
  </BrowserRouter>
);

export default App;

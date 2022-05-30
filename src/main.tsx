import { BrowserRouter } from 'react-router-dom';

import Container from './components/Container';
import Header from './components/Header';
import AppProvider from './contexts/providers';
import AppRoutes from './routes';
import ThemeProvider from './styles';

const App: React.FC = () => (
  <BrowserRouter basename="/">
    <ThemeProvider>
      <AppProvider>
        <Container>
          <Header />
          <AppRoutes />
        </Container>
      </AppProvider>
    </ThemeProvider>
  </BrowserRouter>
);

export default App;

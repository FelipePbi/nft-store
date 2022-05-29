import { Route, Routes } from 'react-router-dom';

import Showcase from '../pages/Showcase';
import Wallet from '../pages/Wallet';

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/*" element={<Showcase />} />
    <Route path="/wallet/*" element={<Wallet />} />
  </Routes>
);

export default AppRoutes;

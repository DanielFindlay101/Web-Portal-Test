import { Route, Routes } from 'react-router-dom';

import { LoginPage } from './LoginPage';

export const AuthRoutes = () => (
  <Routes>
    <Route path='*' element={<LoginPage />} />
    <Route path='/forgot-password' element={null} />
    <Route path='/reset-password' element={null} />
    <Route path='/register' element={null} />
  </Routes>
);

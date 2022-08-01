import { Route, Routes } from 'react-router-dom';

import { JobsPage } from './JobsPage';

export const JobRoutes = () => (
  <Routes>
    <Route path='*' element={<JobsPage />} />
  </Routes>
);

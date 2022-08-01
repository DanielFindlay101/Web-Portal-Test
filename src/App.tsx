import './assets/styles/index.css';

import AssignmentIcon from '@mui/icons-material/Assignment';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import EdgesensorHighIcon from '@mui/icons-material/EdgesensorHigh';
import HomeIcon from '@mui/icons-material/Home';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { BottomNavBar, NavRoute } from './components/library/BottomNavBar';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { AuthRoutes } from './pages/auth';
import { JobRoutes } from './pages/jobs';
import { theme } from './theme';

const routes: NavRoute[] = [
  {
    path: '/home',
    label: 'Home',
    icon: <HomeIcon />
  },
  {
    path: '/jobs',
    label: 'Jobs',
    icon: <AssignmentIcon />
  },
  {
    path: '/connect',
    label: 'Connect',
    icon: <EdgesensorHighIcon />
  },
  {
    path: '/capture',
    label: 'Capture',
    icon: <CameraAltIcon />
  }
];

const subRoutes: NavRoute[] = [
  {
    path: '/home-dashboard',
    label: 'Home Dashboard',
    icon: <HomeIcon />
  },
  {
    path: '/new-job',
    label: 'New Job',
    icon: <AssignmentIcon />
  },
  {
    path: '/new-connect',
    label: 'New Connection',
    icon: <EdgesensorHighIcon />
  },
  {
    path: '/new-capture',
    label: 'New Capture',
    icon: <CameraAltIcon />
  },
  {
    path: '/calls',
    label: 'Calls',
    icon: <CameraAltIcon />
  },
  {
    path: '/contacts',
    label: 'My Contacts',
    icon: <CameraAltIcon />
  },
  {
    path: '/account',
    label: 'My Account',
    icon: <CameraAltIcon />
  },
  {
    path: '/logout',
    label: 'Log Out',
    icon: <CameraAltIcon />
  }
];

const UnauthenticatedRoutes = () => (
  <Routes>
    <Route path='*' element={<AuthRoutes />} />
  </Routes>
);

const AuthenticatedRoutes = () => (
  <Box sx={{ height: '100vh', backgroundColor: theme.palette.grey[100] }}>
    <Routes>
      <Route path='/' element={null} />
      <Route path='/jobs' element={<JobRoutes />} />
    </Routes>
    <BottomNavBar routes={routes} subNavRoutes={subRoutes} />
  </Box>
);

const AuthenticationRouteSwitch = () => {
  const auth = useAuth();

  if (auth?.token) {
    return <AuthenticatedRoutes />;
  } else {
    return <UnauthenticatedRoutes />;
  }
};

export const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <AuthProvider>
        <AuthenticationRouteSwitch />
      </AuthProvider>
    </BrowserRouter>
  </ThemeProvider>
);

import AddIcon from '@mui/icons-material/Add';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import useTheme from '@mui/material/styles/useTheme';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

import { Drawer } from './Drawer';

export interface NavRoute {
  path: string;
  icon: React.ReactNode;
  label: string;
}

export interface BottomNavBarProps {
  routes: NavRoute[];
  subNavRoutes?: NavRoute[];
}

export const BottomNavBar = ({ routes, subNavRoutes }: BottomNavBarProps) => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  const theme = useTheme();
  const [subNavOpen, setSubNavOpen] = useState(false);

  const half = Math.ceil(routes.length / 2);
  const firstHalf = routes.slice(0, half);
  const secondHalf = routes.slice(half);

  return (
    <>
      <Drawer open={subNavOpen} setOpen={setSubNavOpen} header={t('bottomNav.subNav.header')}>
        <List>
          {subNavRoutes?.map((subRoute, index) => (
            <Box key={subRoute.path}>
              <ListItem sx={{ paddingLeft: 3, paddingRight: 2 }}>
                <ListItemButton>
                  <ListItemIcon sx={{ color: 'primary.dark' }}>{subRoute.icon}</ListItemIcon>
                  <ListItemText sx={{ color: 'primary.dark' }} primary={subRoute.label} />
                  <ChevronRightIcon sx={{ color: 'grey.600' }} />
                </ListItemButton>
              </ListItem>
              {index !== subNavRoutes.length - 1 && <Divider />}
            </Box>
          ))}
        </List>
      </Drawer>
      <Paper
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          zIndex: 1201
        }}
        elevation={3}>
        <BottomNavigation value={currentPath} onChange={(_event, newValue) => navigate(newValue)}>
          {firstHalf.map(route => (
            <BottomNavigationAction
              key={route.path}
              label={route.label}
              icon={route.icon}
              value={route.path}
              showLabel
            />
          ))}
          <IconButton
            onClick={() => setSubNavOpen(!subNavOpen)}
            sx={{
              width: 45,
              height: 45,
              borderRadius: 23,
              marginBottom: 1,
              marginRight: 1,
              marginLeft: 1,
              background: `linear-gradient(${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
              alignSelf: 'center'
            }}>
            <AddIcon fontSize='large' sx={{ color: 'white' }} />
          </IconButton>
          {secondHalf.map(route => (
            <BottomNavigationAction
              key={route.path}
              label={route.label}
              icon={route.icon}
              value={route.path}
              showLabel
            />
          ))}
        </BottomNavigation>
      </Paper>
    </>
  );
};

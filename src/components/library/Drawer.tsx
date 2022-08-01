import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

export interface DrawerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  children: React.ReactNode;
  header: string;
  done?: () => void;
}

export const Drawer = ({ open, setOpen, children, header, done }: DrawerProps) => {
  const { t } = useTranslation();

  return (
    <MuiDrawer anchor='bottom' open={open} onClose={() => setOpen(false)}>
      <Box
        sx={{
          width: 'auto',
          background: 'linear-gradient(#FFFFFF, #F5F2FD)'
        }}>
        <Container
          sx={{
            paddingTop: 3,
            paddingBottom: 1,
            paddingLeft: 4,
            paddingRight: 4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <IconButton onClick={() => setOpen(false)} sx={{ position: 'absolute', left: 32 }}>
            <CloseIcon />
          </IconButton>
          <Typography variant='h6' sx={{ color: 'primary.dark' }}>
            {header}
          </Typography>
          {done && (
            <Button color='info' sx={{ textTransform: 'none', position: 'absolute', right: 32 }}>
              {t('drawer.done')}
            </Button>
          )}
        </Container>
        <Box sx={{ maxHeight: '60vh', overflow: 'auto' }}>{children}</Box>
      </Box>
    </MuiDrawer>
  );
};

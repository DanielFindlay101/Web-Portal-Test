import Stack from '@mui/material/Stack';
import useTheme from '@mui/material/styles/useTheme';
import { Box } from '@mui/system';

//imgs
// import biglogo from '../assets/images/biglogo.png';
import SignInForm from '../../components/auth/SignInForm';
declare let require: any;

export const LoginPage = () => {
  const theme = useTheme();
  return (
    <Stack
      height='100%'
      display='flex'
      sx={{
        background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`
      }}>
      <Box display='flex' flex={1} pt={6} pb={4} justifyContent='center' alignItems='center'>
        <img style={{ width: 169, height: 46 }} src={require('../../assets/images/biglogo.png')} />
      </Box>
      <Box display='flex' flex={2} justifyContent='center' alignItems='center'>
        <SignInForm />
      </Box>
    </Stack>
  );
};

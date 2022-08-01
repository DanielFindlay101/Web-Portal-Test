//icons
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { InputAdornment } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import useTheme from '@mui/material/styles/useTheme';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

import { useAuth } from '../../contexts/AuthContext';
import { FormInputBox } from '../library/FormInputBox';

export default function SignInForm() {
  const auth = useAuth();
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = () => {
    // e.preventDefault();
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        background: 'linear-gradient(to right, white, #F4F2F8)',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        pl: 4,
        pr: 4,
        pt: 8
      }}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column'
        }}>
        <Typography component='h1' variant='h6' sx={{ color: 'primary.dark' }}>
          Sign in to Fixzy
        </Typography>
        <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Stack spacing={2}>
            <FormInputBox
              label='Email Address'
              required
              name='email'
              placeholder='e.g email@domain.com'
              autoFocus
              InputProps={{
                startAdornment: (
                  <MailOutlinedIcon sx={{ mr: 2 }} style={{ color: theme.palette.primary.main }} />
                )
              }}
            />
            <FormInputBox
              label='Password'
              required
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end' onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? (
                      <VisibilityIcon style={{ color: theme.palette.primary.main }} />
                    ) : (
                      <VisibilityOffOutlinedIcon style={{ color: theme.palette.primary.main }} />
                    )}
                  </InputAdornment>
                ),
                startAdornment: (
                  <LockOutlinedIcon sx={{ mr: 2 }} style={{ color: theme.palette.primary.main }} />
                )
              }}
            />
          </Stack>
          <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{ mt: 3 }}>
            <FormControlLabel
              control={<Checkbox />}
              label={
                <Typography sx={{ fontSize: 12 }} fontFamily='CeraPro' fontWeight='400'>
                  Remember my details
                </Typography>
              }
            />
            <Link href='#' variant='body2' underline='none'>
              Forgot password?
            </Link>
          </Stack>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            onClick={() => auth?.login()}
            sx={{
              mt: 3,
              mb: 2,
              textTransform: 'initial'
            }}>
            Sign In
          </Button>
          <Box sx={{ mt: 3 }}>
            <Link underline='none' sx={{ fontWeight: 400 }}>
              Dont have an account with us? <span style={{ fontWeight: 700 }}>Register today</span>
            </Link>
          </Box>
        </Box>
        <Box sx={{ mt: 3 }}>
          <Typography
            sx={{
              fontSize: 12,
              color: 'text.secondary',
              mb: 10,
              fontWeight: 400
            }}>
            ©2022 Fixzy Assist Ltd
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

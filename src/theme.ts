import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#564EC8',
      dark: '#4D3996'
    },
    secondary: {
      main: '#2323D8'
    },
    success: {
      main: '#21AD57',
      dark: '#217E44',
      light: '#E2F8EB'
    },
    error: {
      main: '#E85D5B',
      light: '#FFE6E6',
      dark: '#D14747'
    },
    warning: {
      main: '#E8884D',
      light: '#F5965D',
      dark: '#C96528'
    },
    info: {
      main: '#28b5f6',
      light: '#50c2f7',
      dark: '#0287cf'
    },
    text: {
      primary: '#222529',
      secondary: '#B9B6C1'
    }
  },
  typography: {
    fontFamily: 'CeraPro',
    subtitle1: {
      color: '#4D3996',
      fontWeight: 500
    },
    subtitle2: {
      fontWeight: 200
    }
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: 'text-primary'
        }
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.text.primary
        })
      }
    },
    MuiLink: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main
        })
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: 16,
          fontWeight: 300
        }
      }
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          border: '1px solid #564EC8',
          padding: 3
        }
      }
    },
    MuiToggleButton: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          flex: 1,
          borderRadius: 5,
          color: `${ownerState.selected ? 'white' : theme.palette.primary.main} !important`,
          backgroundColor: `${
            ownerState.selected ? theme.palette.primary.main : 'transparent'
          } !important`,
          border: 'none',
          borderTopRightRadius: '5px !important',
          borderBottomRightRadius: '5px !important',
          borderTopLeftRadius: '5px !important',
          borderBottomLeftRadius: '5px !important'
        })
      }
    },
    MuiBottomNavigation: {
      styleOverrides: {
        root: {
          borderTopRightRadius: '20px',
          borderTopLeftRadius: 20,
          height: 90
        }
      }
    },
    MuiDrawer: {
      styleOverrides: {
        paperAnchorBottom: {
          position: 'absolute',
          bottom: 75,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          paddingBottom: 15
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          display: 'flex',
          flex: 1,
          padding: 16,
          boxShadow: 'none',
          border: '1px solid',
          borderColor: theme.palette.grey[300],
          '&:hover': {
            backgroundColor: theme.palette.grey[200],
            cursor: 'pointer'
          }
        })
      }
    }
  },
  shape: {
    borderRadius: 8
  }
});

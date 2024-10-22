import { createTheme, Theme } from '@mui/material/styles';

export const theme: Theme = createTheme({
  mixins: {
    centred: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
  palette: {
    secondary: { main: '#283047' },
    text: {
      primary: '#FFF',
      secondary: '#757575',
    },
    background: {
      paper: '#21212A',
      default: '#17141D',
    },
    action: {
      hover: 'rgba(255, 255, 255, 0.15)',
      selected: 'rgba(255, 255, 255, 0.15)',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: () => ({
        body: {},
      }),
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          '&.Mui-disabled': {
            color: 'rgba(255, 255, 255, 0.15)',
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '& .Mui-selected': {
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
          },
        },
      },
    },
  },
});

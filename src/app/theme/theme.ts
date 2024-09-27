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
      primary: '#283047',
      secondary: '#525D7B',
    },
    background: {
      paper: '#FFF',
      default: '#EFF1F2',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 24,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          textTransform: 'none',
        },
      },
    },
  },
});

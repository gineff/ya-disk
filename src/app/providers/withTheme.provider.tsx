import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from '../theme';
import { ProviderComponent } from './types';

/**
 * Провайдер оборачивает приложение в mui Theme.
 * */


export const withTheme = (Component: ProviderComponent) => () =>
  (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component />
    </ThemeProvider>
  );

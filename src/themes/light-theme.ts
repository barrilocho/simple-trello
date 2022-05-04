import { createTheme } from '@mui/material';
import { grey } from '@mui/material/colors';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#ECEBF3',
    },
    primary: {
      main: '#001B2E',
    },
    secondary: {
      main: '#294c60',
    },
    error: {
      main: '#A26769',
    },
  },
});

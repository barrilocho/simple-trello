import { createTheme } from '@mui/material';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#001B2E',
    },
    primary: {
      main: '#ADB6C4',
    },
    secondary: {
      main: '#294c60',
    },
    error: {
      main: '#A26769',
    },
  },
});

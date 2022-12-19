import { createTheme } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
  color: {
    primary: {
      main: '#c44f6b',
    }
  },
  font: {
    body: 'sans-serif'
  }
});
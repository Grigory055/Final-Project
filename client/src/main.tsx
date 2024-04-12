import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';

const theme = createTheme({
  typography: {
    fontFamily: [
      'pixel',
      'sans-serif',
    ].join(','),
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '0px',
          border: 'none',
          background: 'none',
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          borderRadius: '0px',
          border: 'none',
          background: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '0px',
          border: 'none',
          background: 'none',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          border: 'none',
          borderRadius: '0px',
          background: 'none',
          boxShadow: 'none',
        },
      },
    }
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import theme from '~/styles/theme';
import AppRoutes from './routes/app.routes';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" backgroundColor="#292929" />
      <AppRoutes />
    </ThemeProvider>
  );
}

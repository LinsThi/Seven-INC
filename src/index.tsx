import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { Home } from '~/pages/Home';
import theme from '~/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" backgroundColor="#292929" />
      <Home />
    </ThemeProvider>
  );
}

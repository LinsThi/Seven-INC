import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import Toast from 'react-native-toast-message';
import { ThemeProvider } from 'styled-components';

import theme from '~/styles/theme';

import { Splash } from './components/Splash';
import { toastConfig } from './components/Toast';
import AppRoutes from './routes/app.routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }

    prepare();
  }, []);

  if (!fontsLoaded) {
    return <Splash />;
  }

  SplashScreen.hideAsync();

  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
      <Toast config={toastConfig} />
    </ThemeProvider>
  );
}

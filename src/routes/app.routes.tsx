import { Platform, StatusBar, KeyboardAvoidingView } from 'react-native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from 'styled-components';
import { SafeAreaView } from 'react-native-safe-area-context';

import { EditEmployee } from '~/pages/EditEmployee';
import { Home } from '~/pages/Home';

import theme from '~/styles/theme';

const { Navigator, Screen } = createStackNavigator();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#292929',
  },
};

export default function AppRoutes() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" backgroundColor="#292929" />

        <ThemeProvider theme={theme}>
          <NavigationContainer theme={navTheme}>
            <Navigator
              initialRouteName="Home"
              screenOptions={{ headerShown: false }}
            >
              <Screen name="Home" component={Home} />
              <Screen name="EditEmployee" component={EditEmployee} />
            </Navigator>
          </NavigationContainer>
        </ThemeProvider>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

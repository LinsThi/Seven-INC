import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from 'styled-components';
import theme from '~/styles/theme';

import { EditEmployee } from '~/pages/EditEmployee';
import { Home } from '~/pages/Home';
import { StatusBar } from 'react-native';

const { Navigator, Screen } = createStackNavigator();

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="light-content" backgroundColor="#292929" />

        <Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Screen name="Home" component={Home} />
          <Screen name="EditEmployee" component={EditEmployee} />
        </Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
}

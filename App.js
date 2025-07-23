// IMPORTANDO O STACK
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

import Menu from './src/assets/pages/menu';
import signIn from './src/assets/pages/signIn';
import signUp from './src/assets/pages/signUp';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"menu"} screenOptions={{ headerShown: false }}>
        <Stack.Screen name="menu" component={Menu} />
        <Stack.Screen name="signIn" component={signIn} />
        <Stack.Screen name="signUp" component={signUp} />
      </Stack.Navigator>
    </NavigationContainer >
  );
}

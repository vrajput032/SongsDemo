import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SongsList from '../screen/SongsList';
import SongsDetail from '../screen/SongsDetail';
const Stack = createStackNavigator();

const Routes = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="SongsList"
      component={SongsList}
      options={{ headerShown: false, gestureEnabled: false }}
    />
    <Stack.Screen
      name="SongsDetail"
      component={SongsDetail}
      options={{ headerShown: true, gestureEnabled: false }}
    />
  </Stack.Navigator>
);
export default function Navigator() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}

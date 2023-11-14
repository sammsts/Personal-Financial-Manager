import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';

function Routes () {
  const { Navigator, Screen } = createStackNavigator();
  const NavigatorRoutes = () => {
    return (
      <Navigator screenOptions={{ headerShown: false }} initialRouteName={'Home'}>
        <Screen name="Home" component={Home} options={{ headerShown: false }}  />
      </Navigator>
    )
  }

  return (
    <NavigationContainer>
      <NavigatorRoutes/>
    </NavigationContainer>
  ) 
}

export default Routes;
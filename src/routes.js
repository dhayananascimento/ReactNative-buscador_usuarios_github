import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './pages/Home/index.js';
import User from './pages/User/index.js';

const {Navigator, Screen} = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Screen name="User" component={User} />
      </Navigator>
    </NavigationContainer>
  );
}

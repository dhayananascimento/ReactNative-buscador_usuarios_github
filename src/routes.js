import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './pages/Home/index.js';
import UserPage from './pages/UserPage/index.js';

const {Navigator, Screen} = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={Home} options={{headerShown: false}} />
        <Screen
          name="UserPage"
          component={UserPage}
          options={{
            headerStyle: {backgroundColor: '#EF8354'},
            title: null,
            headerStatusBarHeight: 15,
            headerTintColor: '#FFF',
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}

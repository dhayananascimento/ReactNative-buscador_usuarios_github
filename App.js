import React from 'react';
import {SafeAreaView} from 'react-native';
import UserProvider from './src/providers/UserProvider';
import Routes from './src/routes';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <UserProvider>
        <Routes />
      </UserProvider>
    </SafeAreaView>
  );
};

export default App;

import React from 'react';
import {SafeAreaView} from 'react-native';
import Routes from './src/routes';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Routes />
    </SafeAreaView>
  );
};

export default App;

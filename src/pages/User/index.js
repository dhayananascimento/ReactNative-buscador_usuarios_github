import React from 'react';
import {View, StatusBar} from 'react-native';

import styles from './styles';

export default function User() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#EF8354" style="light"/>
    </View>
  );
};


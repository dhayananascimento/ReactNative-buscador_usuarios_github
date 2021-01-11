import React from 'react';
import {Text, Linking} from 'react-native';
import {TouchableOpacity} from 'react-native';

import styles from './styles';

export default function Repo({item}) {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.container}
      onPress={() => {
        Linking.openURL(item.html_url);
      }}>
      <Text style={styles.name}>{item?.name}</Text>
      <Text style={styles.description}>{item?.description}</Text>
    </TouchableOpacity>
  );
}

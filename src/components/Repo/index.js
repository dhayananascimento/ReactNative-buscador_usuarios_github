import React, {memo} from 'react';
import {Text, Linking, TouchableOpacity} from 'react-native';

import styles from './styles';

function Repo({item}) {
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

export default memo(Repo);

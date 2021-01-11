import React, {memo} from 'react';
import {View, Text, Linking, TouchableOpacity, Image} from 'react-native';

import styles from './styles';

function User({item}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          Linking.openURL(item.html_url);
        }}>
        <Image style={styles.image} source={{uri: item?.avatar_url}} />
      </TouchableOpacity>

      <Text style={styles.name}>{item.login}</Text>
    </View>
  );
}

export default memo(User);

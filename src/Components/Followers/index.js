import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

import api from '../../services/api';

export default function Followers({login}) {
  useEffect(() => {
    api.get(`/${login}/repos`);
  }, []);

  return (
    <View>
      <Text>Seguidores</Text>
    </View>
  );
}

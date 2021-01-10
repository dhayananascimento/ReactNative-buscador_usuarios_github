import React, {useEffect, useContext} from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

import api from '../../services/api';
import {UserContext} from '../../providers/UserProvider';

export default function Following() {
  const {userLogin} = useContext(UserContext);
  useEffect(() => {
    api.get(`/${userLogin.login}/repos`);
  }, []);

  return (
    <View>
      <Text>Seguindo</Text>
    </View>
  );
}

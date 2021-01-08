import React, {useState} from 'react';
import {
  StatusBar,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import styles from './styles';

import api from '../../services/api';

export default function Home({navigation}) {
  const [user, setUser] = useState('');

  function handleSearch() {
    api
      .get(`/${user}`)
      .then((response) => {
        const {
          bio,
          type,
          name,
          login,
          location,
          html_url,
          followers,
          following,
          avatar_url,
          public_repos,
        } = response.data;

        const userData = {
          bio,
          type,
          name,
          login,
          location,
          html_url,
          followers,
          following,
          avatar_url,
          public_repos,
        };
        navigation.navigate('User', userData);
      })
      .catch(() => {
        Alert.alert('Atenção!', 'Usuário invalido.');
      });
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#EF8354" style="light" />

      <Text style={styles.title}>Buscador de Usuários{'\n'} Github</Text>

      <View style={styles.searchWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Insira o usuário"
          onChangeText={setUser}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.search}
          onPress={() => {
            handleSearch();
          }}>
          <Text style={styles.searchText}>Buscar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

import React, {useState, useContext} from 'react';
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
import {UserContext} from '../../providers/UserProvider';

export default function Home({navigation}) {
  const {userLogin, setUserLogin} = useContext(UserContext);
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

        setUserLogin({
          login,
          per_page: userLogin.per_page,
          reposLimitPage: Math.ceil(public_repos / userLogin.per_page),
          followersLimitPage: Math.ceil(followers / userLogin.per_page),
          followingLimitPage: Math.ceil(following / userLogin.per_page),
        });

        navigation.navigate('UserPage', {
          bio,
          type,
          name,
          location,
          html_url,
          followers,
          following,
          avatar_url,
          public_repos,
        });
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
          onChangeText={setUser}
          placeholder="Insira o usuário"
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

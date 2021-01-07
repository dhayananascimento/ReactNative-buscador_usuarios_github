import React from 'react';
import {StatusBar, View, Text, TextInput, TouchableOpacity} from 'react-native';

import styles from './styles';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#EF8354" style="light" />
      <Text style={styles.title}>Buscador de Usuários{'\n'} Github</Text>

      <View style={styles.searchWrapper}>
        <TextInput style={styles.input} placeholder="Insira o usuário" />
        <TouchableOpacity
          style={styles.search}
          onPress={() => {
            navigation.navigate('User');
          }}>
          <Text style={styles.searchText}>Buscar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

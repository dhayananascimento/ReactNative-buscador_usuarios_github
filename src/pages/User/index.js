import React from 'react';
import {StatusBar, View, Text, Image} from 'react-native';
import {Container, Tab, Tabs} from 'native-base';
import styles from './styles';
export default function User() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#EF8354" style="light" />

      <View style={styles.header}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://avatars0.githubusercontent.com/u/62670973?v=4',
          }}
        />

        <View style={styles.headerTextWrapper}>
          <Text style={styles.name}>Dhayana</Text>
          <Text style={styles.location}>Minas gerais</Text>
        </View>
      </View>

      <Text style={styles.bio}>Estudante de Sistemas de informação.</Text>

      <View style={{flex: 1}}>
        <Container style={{marginTop: 20, width: '100%'}}>
          <Tabs
            tabBarBackgroundColor="#FFF"
            tabBarInactiveTextColor="#000"
            tabBarActiveTextColor="#EF8354"
            tabBarUnderlineStyle={{backgroundColor: 'transparent'}}
            tabContainerStyle={{
              elevation: 0,
              paddingVertical: 10,
              backgroundColor: '#FFF',

              borderBottomWidth: 1,
              borderBottomColor: '#BFC0C0',
            }}>
            <Tab
              activeTabStyle={{
                backgroundColor: '#FFF',
                borderRightColor: '#BFC0C0',
                borderRightWidth: 1,
              }}
              tabStyle={{
                backgroundColor: '#FFF',
                borderRightColor: '#BFC0C0',
                borderRightWidth: 1,
              }}
              heading="Repositórios">
              <Text> Repositórios</Text>
            </Tab>
            <Tab
              activeTabStyle={{
                backgroundColor: '#FFF',
                borderRightColor: '#BFC0C0',
                borderRightWidth: 1,
              }}
              tabStyle={{
                backgroundColor: '#FFF',
                borderRightColor: '#BFC0C0',
                borderRightWidth: 1,
              }}
              heading="Seguidores">
              <Text> Seguidores</Text>
            </Tab>
            <Tab
              activeTabStyle={{backgroundColor: '#FFF'}}
              tabStyle={{backgroundColor: '#FFF'}}
              heading="Seguindo">
              <Text> Seguindo</Text>
            </Tab>
          </Tabs>
        </Container>
      </View>
    </View>
  );
}

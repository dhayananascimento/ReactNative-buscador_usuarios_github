import React from 'react';
import {StatusBar, View, Text, Image, Linking} from 'react-native';
import {Container, Tab, Tabs} from 'native-base';

import styles from './styles';

import {TouchableOpacity} from 'react-native-gesture-handler';
import Repos from '../../Components/Repos';
import Followers from '../../Components/Followers';
import Following from '../../Components/Following';

export default function User({route}) {
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
  } = route.params;

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#EF8354" style="light" />

      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            Linking.openURL(html_url);
          }}>
          <Image
            style={styles.image}
            source={{
              uri: avatar_url,
            }}
          />
        </TouchableOpacity>

        <View style={styles.headerTextWrapper}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.location}>{location}</Text>
        </View>
      </View>

      <Text style={styles.bio}>{bio}</Text>

      <View style={{flex: 1}}>
        <Container style={{marginTop: 20, width: '100%'}}>
          <Tabs
            tabBarBackgroundColor="#FFF"
            tabContainerStyle={styles.tabContainer}
            tabBarUnderlineStyle={{backgroundColor: 'transparent'}}>
            
            <Tab
              textStyle={styles.tabText}
              activeTextStyle={styles.activeText}
              heading={`${public_repos}\nRepositórios`}
              activeTabStyle={
                type == 'User'
                  ? [styles.background, styles.divider]
                  : styles.background
              }
              tabStyle={
                type == 'User'
                  ? [styles.background, styles.divider]
                  : styles.background
              }>
              <Repos login={login} />
            </Tab>

            {type == 'User' && (
              <Tab
              textStyle={styles.tabText}
              activeTextStyle={styles.activeText}
                activeTabStyle={[styles.background, styles.divider]}
                tabStyle={[styles.background, styles.divider]}
                heading={`${followers}\nSeguidores`}>
                <Followers login={login} />
              </Tab>
            )}

            {type == 'User' && (
              <Tab
                activeTabStyle={styles.background}
                tabStyle={styles.background}
                activeTextStyle={styles.activeText}
                textStyle={styles.tabText}
                heading={`${following}\nSeguindo`}>
                <Following login={login} />
              </Tab>
            )}
          </Tabs>
        </Container>
      </View>
    </View>
  );
}

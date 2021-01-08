import React, {useEffect, useState} from 'react';
import {Alert, FlatList} from 'react-native';

import api from '../../services/api';
import Repo from '../Repo';

export default function Repos({login}) {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    api
      .get(`/${login}/repos`)
      .then((response) => {
        setRepos(response.data);
      })
      .catch((error) => {
        Alert.alert('Atenção', 'Algo deu errado');
      });
  }, []);

  return (
    <FlatList
      data={repos}
      renderItem={({item}) => <Repo item={item} />}
      keyExtractor={(item) => item.id}
    />
  );
}

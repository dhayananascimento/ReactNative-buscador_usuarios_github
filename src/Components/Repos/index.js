import React, {useEffect, useState, useContext} from 'react';
import {Text, Alert, FlatList, ActivityIndicator} from 'react-native';

import Repo from '../Repo';
import api from '../../services/api';
import {UserContext} from '../../providers/UserProvider';

export default function Repos() {
  const {userLogin} = useContext(UserContext);

  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);

  function loadData() {
    api
      .get(
        `/${userLogin.login}/repos?per_page=${userLogin.per_page}&page=${currentPage}`,
      )
      .then((response) => {
        setRepos((prevRepos) => [...prevRepos, ...response.data]);
        setIsLoading(false);
      })
      .catch(() => {
        Alert.alert('Atenção', 'Algo deu errado ao buscar repositórios');
        setIsLoading(false);
      });
  }

  function loadMore() {
    let nextPage = currentPage + 1;
    currentPage < userLogin.reposLimitPage ? setCurrentPage(nextPage) : null;
  }

  function footer() {
    return isLoading ? (
      <ActivityIndicator color={'#EF8354'} size="large" />
    ) : null;
  }

  useEffect(() => {
    setIsLoading(true);
    loadData();
  }, [currentPage]);

  return (
    <FlatList
      data={repos}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => <Repo item={item} />}
      keyExtractor={(item, index) => `${item.id}${index}`}
      onEndReached={loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={footer}
      ListEmptyComponent={() => (
        <Text style={{color: '#000', marginVertical: 20}}>
          Não possui itens.
        </Text>
      )}
    />
  );
}

import React, {useEffect, useContext, useState} from 'react';
import {Text, ActivityIndicator, Alert, FlatList} from 'react-native';

import api from '../../services/api';
import {UserContext} from '../../providers/UserProvider';
import User from '../User';

export default function Followers() {
  const {userLogin} = useContext(UserContext);

  const [followers, setFollowers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);

  function loadData(mounted) {
    if (mounted)
      api
        .get(
          `/${userLogin.login}/followers?per_page=${userLogin.per_page}&page=${currentPage}`,
        )
        .then((response) => {
          setFollowers((prevFollowers) => [...prevFollowers, ...response.data]);
          setIsLoading(false);
        })
        .catch(() => {
          Alert.alert('Atenção', 'Algo deu errado ao buscar Seguidores');
          setIsLoading(false);
        });
  }

  function loadMore() {
    let nextPage = currentPage + 1;
    currentPage < userLogin.followersLimitPage
      ? setCurrentPage(nextPage)
      : null;
  }

  function footer() {
    return isLoading ? (
      <ActivityIndicator color={'#EF8354'} size="large" />
    ) : null;
  }

  useEffect(() => {
    let mounted = true;

    setIsLoading(true);
    loadData(mounted);

    return () => (mounted = false);
  }, [currentPage]);

  return (
    <FlatList
      numColumns={2}
      data={followers}
      showsVerticalScrollIndicator={false}
      columnWrapperStyle={{justifyContent: 'space-around'}}
      renderItem={({item}) => <User item={item} />}
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

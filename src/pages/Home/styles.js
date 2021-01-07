import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "space-evenly",
    backgroundColor: '#EF8354',
  },

  title: {
    fontSize: 32,
    color: '#FFF',
    textAlign: 'center',
  },

  searchWrapper: {
    width: '100%',
  },

  input: {
    height: 60,
    padding: 10,
    fontSize: 16,
    width: '100%',
    color: '#FFF',
    marginVertical: 10,
    
    borderColor: '#FFF',
    borderRadius: 5,
    borderWidth: 1
  },

  search: {
    height: 60,
    width: '100%',
    borderRadius: 5,
    marginVertical: 10,
    backgroundColor: '#FFF',

    justifyContent: 'center',
    alignItems: 'center',
  },

  searchText: {
    color: '#EF8354',
    fontSize: 20,
  },
});

export default styles;

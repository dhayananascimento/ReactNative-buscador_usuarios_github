import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#FFF',
  },

  header: {
    flexDirection: 'row',
    marginBottom: 20,
  },

  image: {
    width: 125,
    height: 125,
    borderRadius: 125 / 2,
    backgroundColor: '#4F5D75',
  },

  headerTextWrapper: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },

  name: {
    fontSize: 22,
    color: '#000',
  },

  location: {
    fontSize: 16,
    color: '#000',
    opacity: 0.4,
  },

  bio: {
    fontSize: 16,
    color: '#000',
  },
});

export default styles;

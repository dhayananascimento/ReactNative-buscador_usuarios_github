import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '47%',
    height: 'auto',

    padding: 10,
    marginVertical: 10,
    backgroundColor: '#FFF',

    borderWidth: 1,
    borderColor: '#BFC0C0',
    borderRadius: 5,
    alignItems: 'center',
  },

  image: {
    width: 75,
    height: 75,
    borderRadius: 75 / 2,
    backgroundColor: '#4F5D75',
  },

  texthWrapper: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },

  name: {
    fontSize: 20,
    color: '#000',
  },

  description: {
    opacity: 0.4,
    fontSize: 16,
    color: '#000',
  },
});

export default styles;

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

  tabContainer: {
    elevation: 0,
    paddingVertical: 10,
    backgroundColor: '#FFF',

    borderBottomWidth: 1,
    borderBottomColor: '#BFC0C0',
  },

  activeText: {
    textAlign: 
    'center', 
    color: '#EF8354'
  },

  tabText: {
    textAlign: 'center', 
    color: '#000'
  },

  background: {
    backgroundColor: '#FFF',
  },

  divider: {
    borderRightColor: '#BFC0C0',
    borderRightWidth: 1,
  }
});

export default styles;

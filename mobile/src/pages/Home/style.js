import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: '#FFF',
  },

  topicTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },

  matter: {
    margin: 15,
    padding: 5,
  },

  matterTitle: {
    fontSize: 20
  },

});

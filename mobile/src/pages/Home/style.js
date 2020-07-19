import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({

  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 5,
    backgroundColor: '#121212'
  },

  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#000',
    backgroundColor: '#FFFFFF',
    height: 50,
    borderRadius: 4,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 8,
  },

  searchIcon: {
    margin: 5,
    width: 25,
    left: 90
  },

  input: {
    flex: 1,
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'Roboto_700Bold',
  },
});

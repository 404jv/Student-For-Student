import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { 
  useFonts, 
  Roboto_400Regular, 
  Roboto_700Bold 
} from '@expo-google-fonts/roboto';

export default StyleSheet.create({

  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight - 25,
    backgroundColor: '#FFF'
  },

  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderRadius: 8,
  },

  searchIcon: {
    margin: 5,
    width: 25,
    alignItems: 'center'
  },

  input: {
    flex: 1
  },

  lineBottom: {
    borderBottomWidth: 0.5,
    borderColor: '#000',
    width: '100%',
  }
});

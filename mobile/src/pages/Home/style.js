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
    paddingTop: Constants.statusBarHeight + 5,
    backgroundColor: '#FFF'
  },

  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 40,
    borderRadius: 8,
    margin: 10
  },

  searchIcon: {
    margin: 5,
    width: 25,
    alignItems: 'center'
  },

  input: {
    flex: 1
  },
});

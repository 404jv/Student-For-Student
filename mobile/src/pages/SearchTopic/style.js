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
    paddingTop: Constants.statusBarHeight - 32,
    backgroundColor: '#121212'
  },

  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#282828',
    height: 55,
  },

  searchIcon: {
    margin: 5,
    marginLeft: 16,
    width: 25,
    alignItems: 'center'
  },

  input: {
    flex: 1,
    height: 55,
    color: '#FFF',
    fontFamily: 'Roboto_700Bold',
    fontSize: 15,
  },

  lineBottom: {
    borderBottomWidth: 0.5,
    borderColor: '#000',
    width: '100%',
  },

  topic: {
    flexDirection: 'column',
    marginTop: 20,
    width: 331,
    height: 150,
    borderRadius: 8,
    backgroundColor: '#282828',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
  },


  topicImage: {
    width: '100%',
    height: '76%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    marginBottom: 3
  },

  topicInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 12,
    marginRight: 10
  },

  topicName: {
    fontSize: 24,
    fontFamily: 'Roboto_400Regular',
    color: '#FFF',
  },
});

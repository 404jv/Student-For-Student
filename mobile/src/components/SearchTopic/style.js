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
  },

  groupTopics: {
    flex: 1,
    alignItems: 'center',
  },

  topic: {
    flexDirection: 'row',
    marginTop: 20,
    width: '95%',
    height: 150,
    borderRadius: 8,
    backgroundColor: '#FFF',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  },


  topicImage: {
    width: '82%',
    height: '76%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    marginBottom: 3
  },

  topicInfo: {
    width: '78%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 15,
  },

  topicName: {
    fontSize: 24,
    fontFamily: 'Roboto_400Regular',
  },
});

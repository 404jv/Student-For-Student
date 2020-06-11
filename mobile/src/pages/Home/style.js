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
    paddingTop: Constants.statusBarHeight + 20,
  },

  topic: {
    marginBottom: 20
  },

  topicTitle: {
    fontWeight: 'bold',
    fontFamily: 'Roboto_700Bold',
    fontSize: 20,
    marginLeft: 20
  },

  groupMatter: {
    flexDirection: "row",
    marginTop: 16,
    marginBottom: 8,
  },

  matter: {
    margin: 8,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#525759',
    borderRadius: 8,
    height: 90,
    width: 90,
    textAlign: 'center'
  },

  matterTitle: {
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'Roboto_400Regular'
  },

  matterTags: {
    textAlign: 'center',
    fontSize: 10,
    fontFamily: 'Roboto_400Regular'
  },

  button: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 8,
    borderBottomColor: '#525759',
    alignItems: 'center',
  },

  textButton: {
    marginLeft: 10,
    fontSize: 16,
    textAlign: 'center'
  }

});

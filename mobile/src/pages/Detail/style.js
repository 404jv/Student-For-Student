import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 10,
    backgroundColor: '#FFF',
  },

  header: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center',
    marginBottom: 22,
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 8,
  },
  
  lineBottom: {
    borderBottomWidth: 0.5,
    borderColor: '#000',
    width: '100%',
  },

  matterTitle: {
    fontWeight: 'bold',
    fontFamily: 'Roboto_700Bold',
    fontSize: 25,
    textAlign: 'justify',
  },

  matter: {
    backgroundColor: '#f9fafb',
    padding: 8,
    width: '100%',
    height: 250,
  },

  span: { 
    marginLeft: 15, 
    fontSize: 20,
    marginBottom: 8
  },


  verse: {
    alignItems: 'center',
    backgroundColor: '#f9fafb',
  },

  resume: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 25,
    textAlign: 'justify',
  },

  buttonRev: {
    padding: 8,
    margin: 8,
    borderRadius: 8,
    backgroundColor: '#1d2a30',
  },
});
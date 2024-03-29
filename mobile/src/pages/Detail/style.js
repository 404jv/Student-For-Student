import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight - 4,
    backgroundColor: '#121212',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: -15,
    marginLeft: 8,
    marginRight: 16,
    marginBottom: 16,
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
    backgroundColor: '#282828',
    padding: 8,
    width: '100%',
    height: 250,
    marginTop: 8
  },

  span: { 
    marginLeft: 15, 
    fontSize: 20,
    marginBottom: 8
  },


  verse: {
    alignItems: 'center',
    backgroundColor: '#282828',
  },

  resume: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 25,
    textAlign: 'justify',
  },

  buttonRev: {
    width: 95,
    height: 35,
    margin: 8,
    borderRadius: 15,
    backgroundColor: '#1DBA54',
    justifyContent: 'center'
  },

  textButton: { 
    color: '#FFF', 
    textAlign: 'center',
    fontSize: 18
  },
});
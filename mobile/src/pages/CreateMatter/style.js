import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 10,
    backgroundColor: '#FFF',
    alignItems: 'center'
  },

  iconContainer: {
    padding: 5,
    borderWidth: 2,
    borderColor: '#525759',
    borderRadius: 80,
    height: 100,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },

  iconPlus: {
    left: 35,
    backgroundColor: '#00ACEE',
    borderRadius: 40,
  },
  
  header: {
    alignItems: 'center',
    marginBottom: 15
  },

  headerTitle: {
    fontWeight: 'bold',
    fontFamily: 'Roboto_700Bold',
    fontSize: 25,
    marginBottom: 8,
    marginTop: 18
  },

  headerText: {
    textAlign: 'center',
    color: '#73797d',
    fontSize: 14,
    marginBottom: 64,
    marginRight: 7,
    marginLeft: 7,
  },

  input: {
    marginBottom: 18,
    width: '80%',
    color: '#73797d',
    fontSize: 21,
    height: 64
  },

  button: {
    padding: 8,
    margin: 8,
    borderRadius: 8,
    backgroundColor: '#1d2a30',
    width: '80%',
    height: 64,
    justifyContent: 'center'
  },

  textButton: { 
    color: '#f9fafb',
    textAlign: 'center',
    fontSize: 21
  },

});

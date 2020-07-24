import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center'
  },

  iconContainer: {
    padding: 5,
    borderWidth: 2,
    backgroundColor: '#1DBA54',
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
    flex: 1,
    alignItems: 'center',
    marginBottom: 15
  },

  headerTitle: {
    fontWeight: 'bold',
    fontFamily: 'Roboto_700Bold',
    fontSize: 25,
    color: '#FFF',
    marginBottom: 8,
    marginTop: 18
  },

  headerText: {
    textAlign: 'center',
    color: '#C8C8C8',
    fontSize: 14,
  },

  groupInputs: {
    flex: 1,
    width: '90%',
    alignItems: 'center',
  },

  input: {
    marginBottom: 18,
    width: '90%',
    color: '#121212',
    borderRadius: 8,
    backgroundColor: '#FFF',
    fontSize: 21,
    height: 64,
    textAlign: 'center'
  },

  button: {
    padding: 8,
    margin: 8,
    borderRadius: 8,
    backgroundColor: '#1DBA54',
    width: '90%',
    height: 64,
    justifyContent: 'center'
  },

  textButton: { 
    color: '#FFF',
    textAlign: 'center',
    fontSize: 21,
    alignItems: 'center'
  },

});

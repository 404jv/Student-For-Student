import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  container: {
    flex: 1,
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
    marginBottom: -15
  },

  searchIcon: {
    margin: 5,
    marginRight: 10
  },

  textInput: {
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'Roboto_700Bold',
    color: '#282828'
  },
});

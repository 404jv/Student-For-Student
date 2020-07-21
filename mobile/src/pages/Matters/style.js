import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({

  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight - 25,
    backgroundColor: '#121212',
  },

  header: {
    flexDirection: 'row',
    marginBottom: 22,
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 8,
    marginBottom: 8,
    marginTop: 16
  },
  
  image: {
    height: 115,
    width: 115,
    borderRadius: 8,
  },

  topicName: {
    fontWeight: 'bold',
    fontFamily: 'Roboto_700Bold',
    marginLeft: 8,
    fontSize: 28,
    color: '#FFF'
  },

  matter: {
    marginBottom: 25,
    borderRadius: 8,
    backgroundColor: '#282828',
    padding: 8,
    width: '94%',
    height: 250,
  },

  matterHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  groupIcons: {
    marginRight: 8,
  },

  title: {
    fontWeight: 'bold',
    fontFamily: 'Roboto_700Bold',
    fontSize: 30,
    textAlign: 'center',
    color: '#FFF',
    marginLeft: 8
  },

  strong: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 20,
    color: '#C8C8C8',
  },

  span: {
    color: '#1DBA54',
    fontSize: 16,
    marginLeft: 25,
    marginTop: 4,
    marginBottom: 4
  },

  spanReview: {
    color: '#1DBA54',
    fontSize: 20,
  },

  reviewGroup: { 
    marginTop: -40, 
    flex: 1, 
    flexDirection: 'row', 
    alignItems:'center'
  },

  tags: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
    color: '#C8C8C8',
    textAlign: 'center',
    bottom: 15,
  },

  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 8,
    marginRight: 8,
  },

  textButton: {
    fontSize: 17,
    color: '#C8C8C8'
  },

});

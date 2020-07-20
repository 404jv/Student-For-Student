import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({

  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight - 18,
    backgroundColor: '#FFF',
  },

  header: {
    flexDirection: 'row',
    marginBottom: 22,
    alignItems: 'center',
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 8
  },
  
  lineBottom: {
    borderBottomWidth: 0.5,
    borderColor: '#000',
    width: '100%',
  },

  topicName: {
    fontWeight: 'bold',
    fontFamily: 'Roboto_700Bold',
    fontSize: 25,
    marginLeft: 90,
  },

  matter: {
    marginBottom: 25,
    borderWidth: 0.5,
    borderRadius: 8,
    borderColor: '#5454',
    backgroundColor: '#f9fafb',
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
    color: '#1d2a30',
    marginLeft: 8
  },

  strong: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 20,
    color: '#3d4042',
  },

  span: {
    color: '#73797d',
    fontSize: 16,
    marginLeft: 25,
    marginTop: 4,
    marginBottom: 4
  },

  spanReview: {
    color: '#73797d',
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
    color: '#73797d',
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
    color: '#0a0e10'
  },

});

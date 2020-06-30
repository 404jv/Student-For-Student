import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  container: {
    flex: 1,
    marginTop: 15,
    backgroundColor: '#FFF'
  },

  topic: {
    marginBottom: 20
  },

  topicTitle: {
    fontWeight: 'bold',
    fontFamily: 'Roboto_700Bold',
    fontSize: 25,
    marginLeft: 20
  },

  groupMatter: {
    flexDirection: "row",
    marginTop: 16,
    marginBottom: 8,
  },

  matter: {
    margin: 8,
    borderWidth: 2,
    borderColor: '#525759',
    borderRadius: 8,
    height: 90,
    width: 90,
    alignItems: 'center',
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

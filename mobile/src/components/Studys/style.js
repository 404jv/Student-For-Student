import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  container: {
    flex: 1,
    marginTop: 15,
    backgroundColor: '#121212'
  },

  topic: {
    marginBottom: 20
  },

  topicTitle: {
    fontWeight: 'bold',
    fontFamily: 'Roboto_700Bold',
    color: "#FFFFFF",
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
    padding: 5,
    borderWidth: 2,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    height: 140,
    width: 135,
    alignItems: 'center',
    justifyContent: 'center'
  },

  iconAdd: {
    backgroundColor: '#1DBA54',
    borderRadius: 100,
    padding: 20,
    top: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },

  iconPlus: {
    zIndex: 10,
    left: 25,
    backgroundColor: '#121212',
    borderRadius: 15,
    bottom: 15
  },

  matterTitle: {
    textAlign: 'center',
    fontSize: 25,
    color: '#121212',
    fontFamily: 'Roboto_700Bold',
  },

  nextStudy: {
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'Roboto_400Regular',
    color: '#121212'
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
    textAlign: 'center',
    color: '#FFFFFF'
  }

});

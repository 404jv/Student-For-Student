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
    padding: 5,
    borderWidth: 2,
    borderColor: '#525759',
    borderRadius: 80,
    height: 100,
    width: 100,
    alignItems: 'center',
  },

  iconPlus: {
    left: 35,
    backgroundColor: '#00ACEE',
    borderRadius: 40
  },

  matterTitle: {
    textAlign: 'center',
    fontSize: 25,
    top: 8,
    fontFamily: 'Roboto_400Regular'
  },

  nextStudy: {
    textAlign: 'center',
    fontSize: 15,
    top: 13,
    fontFamily: 'Roboto_400Regular',
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

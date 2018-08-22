import {StyleSheet} from 'react-native';

const homeStyles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginLeft: 8,
  },

  menu: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'stretch',

    backgroundColor: '#fefefe',

    borderWidth: 1,
    borderColor: '#cbcbcb',
    borderRadius: 16,

    padding: 16,
    margin: 8,
  },

  menuButton: {
    fontSize: 24,
  }
});

export default homeStyles;
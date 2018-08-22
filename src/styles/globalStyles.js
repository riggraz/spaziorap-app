import {StyleSheet} from 'react-native';

const globalStyles = StyleSheet.create({
  box: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch',

    backgroundColor: '#fefefe',

    borderWidth: 1,
    borderColor: '#cbcbcb',
    borderRadius: 16,

    padding: 16,
    margin: 8,
  },

  horizontalBox: {
    width: 320,

    backgroundColor: '#fefefe',

    borderWidth: 1,
    borderColor: '#cbcbcb',
    borderRadius: 16,

    padding: 16,
    margin: 8,
  },

  hiddenBox: {
    width: '100%',

    marginTop: 8,
    marginBottom: 8,
  },
});

export default globalStyles;
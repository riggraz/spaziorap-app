import {StyleSheet} from 'react-native';

const songStyles = StyleSheet.create({
  box: {
    width: 200,
    height: 160,

    justifyContent: 'center',

    backgroundColor: '#fefefe',

    borderWidth: 1,
    borderColor: '#cbcbcb',
    borderRadius: 16,

    padding: 16,
    margin: 8,
  },

  songName: {
    fontSize: 16,

    marginBottom: 8,
  },
});

export default songStyles;
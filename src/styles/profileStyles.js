import {StyleSheet} from 'react-native';

const profileStyles = StyleSheet.create({
  userInfoBox: {
    width: '100%',
    height: 80,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    borderBottomWidth: 1,
    borderColor: '#cbcbcb',

    backgroundColor: '#fefefe',
  },

  username: {
    fontSize: 24,
  },

  score: {
    fontSize: 22,
  }
});

export default profileStyles;
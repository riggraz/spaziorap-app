import {StyleSheet} from 'react-native';

import {BOX_BACKGROUND_COLOR, BOX_BORDER_COLOR} from '../constants/colors';

const profileStyles = StyleSheet.create({
  userInfoBox: {
    width: '100%',
    height: 80,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    borderBottomWidth: 1,
    borderColor: BOX_BORDER_COLOR,

    backgroundColor: BOX_BACKGROUND_COLOR,
  },

  username: {
    fontSize: 24,
  },

  score: {
    fontSize: 22,
  }
});

export default profileStyles;
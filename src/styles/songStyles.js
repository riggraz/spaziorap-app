import {StyleSheet} from 'react-native';

import {BOX_BACKGROUND_COLOR, BOX_BORDER_COLOR} from '../constants/colors';

const songStyles = StyleSheet.create({
  box: {
    width: 200,
    height: 160,

    justifyContent: 'center',

    backgroundColor: BOX_BACKGROUND_COLOR,

    borderWidth: 1,
    borderColor: BOX_BORDER_COLOR,
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
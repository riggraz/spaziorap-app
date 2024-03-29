import {StyleSheet} from 'react-native';

import {BOX_BACKGROUND_COLOR, BOX_BORDER_COLOR, TITLE_COLOR} from '../constants/colors';

const postStyles = StyleSheet.create({
  postContentBox: {
    backgroundColor: BOX_BACKGROUND_COLOR,
    borderWidth: 1,
    borderColor: BOX_BORDER_COLOR,

    marginTop: 16,
    marginBottom: 16,
  },

  body: {
    fontSize: 16,
    color: 'black',

    marginTop: 8,
    // marginLeft: 16,
    // marginRight: 16,
    marginBottom: 8,
  },
});

export default postStyles;
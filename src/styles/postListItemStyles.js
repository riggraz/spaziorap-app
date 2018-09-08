import {StyleSheet} from 'react-native';

import {TITLE_COLOR} from '../constants/colors';

const postListItemStyles = StyleSheet.create({
  postContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginVertical: 8,
  },
  
  postBody: {
    color: 'black',
    fontFamily: 'Roboto',

    marginRight: 4,
  },

  postBodyLarge: {
    fontSize: 28,
    // fontFamily: 'sans-serif-condensed',
  },

  postBodyMedium: {
    fontSize: 24,
    // fontFamily: 'sans-serif-light',
  },

  postBodySmall: {
    fontSize: 18,
  },

  postVideoThumbnail: {
    flex: 2,
  },
});

export default postListItemStyles;
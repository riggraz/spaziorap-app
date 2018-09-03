import {StyleSheet} from 'react-native';

import {TITLE_COLOR} from '../constants/colors';

const postListItemStyles = StyleSheet.create({
  postTitle: {
    fontSize: 22,
    color: TITLE_COLOR,

    marginBottom: 8,
  },
  
  postExcerpt: {
    fontSize: 16,
    color: 'black',

    marginBottom: 8,
  },
});

export default postListItemStyles;
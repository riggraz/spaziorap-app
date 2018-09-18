import {StyleSheet} from 'react-native';

import {BOX_BACKGROUND_COLOR, BOX_BORDER_COLOR} from '../constants/colors';

const homeStyles = StyleSheet.create({
  title: {
    fontSize: 25,
    marginLeft: 8,
  },

  menu: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'stretch',

    backgroundColor: BOX_BACKGROUND_COLOR,

    borderWidth: 1,
    borderColor: BOX_BORDER_COLOR,
    borderRadius: 16,

    padding: 16,
    margin: 8,
  },

  menuButton: {
    fontSize: 24,
  }
});

export default homeStyles;
import {StyleSheet} from 'react-native';

import {
  BOX_BACKGROUND_COLOR,
  BOX_BORDER_COLOR,
  BACKGROUND_COLOR
} from '../constants/colors';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },

  box: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch',

    backgroundColor: BOX_BACKGROUND_COLOR,

    borderWidth: 1,
    borderColor: BOX_BORDER_COLOR,
    borderRadius: 16,

    paddingVertical: 8,
    paddingHorizontal: 16,
    margin: 8,
  },

  horizontalBox: {
    width: 320,

    backgroundColor: BOX_BACKGROUND_COLOR,

    borderWidth: 1,
    borderColor: BOX_BORDER_COLOR,
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
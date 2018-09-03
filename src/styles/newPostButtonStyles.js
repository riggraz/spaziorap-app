import {StyleSheet} from 'react-native';

import {BOX_BACKGROUND_COLOR, BOX_BORDER_COLOR, TITLE_COLOR} from '../constants/colors';

const newPostButtonStyles = StyleSheet.create({
  container: {
    width: '90%',

    backgroundColor: BOX_BACKGROUND_COLOR,
    borderColor: BOX_BORDER_COLOR,
    borderWidth: 1,
    borderRadius: 70,
    

    alignSelf: 'center',
    marginTop: 12,
    marginBottom: 12,
    padding: 24,
  },
  
  title: {
    fontSize: 24,
    color: TITLE_COLOR,
    fontWeight: 'bold',
    textAlign: 'center',

    marginTop: 0,
  },

  emoji: {
    fontSize: 48,
    textAlign: 'center',

    marginBottom: 0,
  },
});

export default newPostButtonStyles;
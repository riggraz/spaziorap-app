import {StyleSheet} from 'react-native';

import {BOX_BACKGROUND_COLOR, BOX_BORDER_COLOR, MAIN_COLOR_DARKER} from '../constants/colors';

const topicsListItemStyles = StyleSheet.create({
  topicSectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    backgroundColor: MAIN_COLOR_DARKER,

    padding: 8,
  },

  topicBox: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',

    backgroundColor: BOX_BACKGROUND_COLOR,

    borderBottomWidth: 1,
    borderColor: BOX_BORDER_COLOR,

    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingRight: 16,
  },
  
  topicTitle: {
    fontSize: 18,
    color: 'black'
  },

  icon: {
    width: 32,
    height: 32,
    
    marginRight: 16,
  }
});

export default topicsListItemStyles;
import {StyleSheet} from 'react-native';

import {BOX_BACKGROUND_COLOR, BOX_BORDER_COLOR} from '../constants/colors';

const skeletonStyles = StyleSheet.create({
    placeholderContainer: {
      alignSelf: 'stretch',
  
      backgroundColor: BOX_BACKGROUND_COLOR,
  
      borderWidth: 1,
      borderColor: BOX_BORDER_COLOR,
      borderRadius: 16,
  
      margin: 8,
      padding: 4,
    },
  
    placeholderText: {
      height: 20,
      marginTop: 8,
      marginLeft: 8,
      marginRight: 8,
      alignSelf: 'flex-start',
      backgroundColor: '#eeeeee',
    },

    placeholderSmallText: {
      height: 13,
      marginTop: 8,
      marginLeft: 8,
      marginRight: 8,
      alignSelf: 'flex-start',
      backgroundColor: '#eeeeee',
    },

    placeholderEmoji: {
      width: 24,
      height: 24,
      borderRadius: 24,
      marginTop: 8,
      alignSelf: 'flex-start',
      backgroundColor: '#eeeeee',
    },

    placeholderTopicContainer: {
      width: 90,
      height: 90,

      marginHorizontal: 4,
    },

    placeholderTopicIcon: {
      width: 50,
      height: 50,
      borderRadius: 50,
      alignSelf: 'center',
      backgroundColor: '#eeeeee',
    },

    placeholderInfoBox: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  
    placeholderInfoBoxText: {
      height: 18,
      margin: 8,
      borderRadius: 36,
      alignSelf: 'flex-start',
      justifyContent: 'center',
      backgroundColor: '#eeeeee',
    },
  });

export default skeletonStyles;
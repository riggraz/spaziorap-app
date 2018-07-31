import {StyleSheet} from 'react-native';

const skeletonStyles = StyleSheet.create({
    placeholderContainer: {
      alignSelf: 'stretch',
  
      backgroundColor: '#fefefe',
  
      borderWidth: 1,
      borderColor: '#cbcbcb',
      borderRadius: 16,
  
      margin: 8,
      padding: 16,
    },
  
    placeholderText: {
      height: 16,
      marginTop: 8,
      marginLeft: 16,
      marginRight: 16,
      alignSelf: 'flex-start',
      backgroundColor: '#eeeeee',
    },
  
    placeholderTitleText: {
      height: 38,
      marginTop: 8,
      marginLeft: 16,
      marginRight: 16,
      alignSelf: 'flex-start',
      backgroundColor: '#eeeeee',
    },

    placeholderInfoBox: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  
    placeholderInfoBoxText: {
      height: 18,
      marginTop: 8,
      marginLeft: 24,
      marginRight: 24,
      borderRadius: 36,
      alignSelf: 'flex-start',
      justifyContent: 'center',
      backgroundColor: '#eeeeee',
    },
  });

export default skeletonStyles;
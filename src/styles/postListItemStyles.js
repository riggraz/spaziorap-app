import {StyleSheet, Platform} from 'react-native';

const postListItemStyles = StyleSheet.create({
  postContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',

    marginVertical: 8,
  },
  
  postBody: {
    color: 'black',
    fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'Roboto',

    marginRight: 4,
  },

  postBodyLarge: {
    fontSize: 26,
  },

  postBodyMedium: {
    fontSize: 22,
  },

  postBodySmall: {
    fontSize: 18,
  },
});

export default postListItemStyles;
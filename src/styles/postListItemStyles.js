import {StyleSheet} from 'react-native';

const postListItemStyles = StyleSheet.create({
  postBox: {
    flex: 1,
    alignSelf: 'stretch',

    borderTopColor: 'grey',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,

    paddingTop: 16,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 16
  },
  
  postTitle: {
    fontSize: 24,
    color: 'blue'
  },

  postExcerpt: {
    fontSize: 16,
    color: 'black'
  }
});

export default postListItemStyles;
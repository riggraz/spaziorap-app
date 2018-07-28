import {StyleSheet} from 'react-native';

const postListItemStyles = StyleSheet.create({
  postBox: {
    flex: 1,
    alignSelf: 'stretch',

    backgroundColor: '#fefefe',

    borderWidth: 1,
    borderColor: '#cbcbcb',

    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingRight: 16,

    marginTop: 8,
    marginBottom: 8,
  },
  
  postTitle: {
    fontSize: 24,
    color: '#95190C',

    marginBottom: 8,
  },

  postExcerpt: {
    fontSize: 16,
    color: 'black',

    marginBottom: 8,
  },
});

export default postListItemStyles;
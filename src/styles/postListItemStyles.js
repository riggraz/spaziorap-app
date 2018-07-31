import {StyleSheet} from 'react-native';

const postListItemStyles = StyleSheet.create({
  postBox: {
    flex: 1,
    alignSelf: 'stretch',

    backgroundColor: '#fefefe',

    borderWidth: 1,
    borderColor: '#cbcbcb',
    borderRadius: 16,

    padding: 16,
    margin: 8,
  },
  
  postTitle: {
    fontSize: 22,
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
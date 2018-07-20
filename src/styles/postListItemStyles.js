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
    color: '#95190C'
  },

  postExcerpt: {
    fontSize: 16,
    color: 'black'
  },

  infoBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginTop: 8,
  },

  infoBoxText: {
    color: 'white',
    backgroundColor: '#a0a0a0',

    fontSize: 14,

    paddingTop: 4,
    paddingLeft: 8,
    paddingBottom: 4,
    paddingRight: 8,

    borderRadius: 36,
  },
});

export default postListItemStyles;
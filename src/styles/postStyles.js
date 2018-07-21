import {StyleSheet} from 'react-native';

const postStyles = StyleSheet.create({
  postContentBox: {
    backgroundColor: '#fefefe',
    borderWidth: 1,
    borderColor: '#cbcbcb',

    marginTop: 16,
    marginBottom: 16,
  },
  
  title: {
    fontSize: 24,
    lineHeight: 24,
    textAlign: 'center',

    color: '#95190C',

    marginTop: 8,
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 8,
  },

  body: {
    fontSize: 16,
    color: 'black',

    marginTop: 8,
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 8,
  },
});

export default postStyles;
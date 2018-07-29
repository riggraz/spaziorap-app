import {StyleSheet} from 'react-native';

const skeletonStyles = StyleSheet.create({
  placeholderContainer: {
    width: '100%',

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

  placeholderText: {
    height: 14,
    marginTop: 8,
    marginLeft: 24,
    marginRight: 24,
    alignSelf: 'flex-start',
    backgroundColor: '#eeeeee',
  },

  placeholderTitleText: {
    height: 35,
    marginTop: 8,
    marginLeft: 24,
    marginRight: 24,
    alignSelf: 'flex-start',
    backgroundColor: '#eeeeee',
  },

  placeholderBox: {
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
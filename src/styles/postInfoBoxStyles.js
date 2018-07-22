import {StyleSheet} from 'react-native';

const postInfoBoxStyles = StyleSheet.create({
  infoBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',

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

export default postInfoBoxStyles;
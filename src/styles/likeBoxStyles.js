import {StyleSheet} from 'react-native';

const likeBoxStyles = StyleSheet.create({
  box: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  buttonText: {
    fontSize: 20,
    marginRight: 4,
  },

  scoreText: {
    fontSize: 22,
    marginHorizontal: 16,
  },
});

export default likeBoxStyles;
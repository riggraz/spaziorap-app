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

  buttonTextSmall: {
    fontSize: 16,
    marginRight: 4,
  },

  scoreText: {
    fontSize: 24,
    marginHorizontal: 16,
  },

  scoreTextSmall: {
    fontSize: 16,
    marginHorizontal: 8,
  }
});

export default likeBoxStyles;
import {StyleSheet} from 'react-native';

const topicsListItemStyles = StyleSheet.create({
  topicSectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#95190C',

    padding: 8,
  },

  topicBox: {
    flex: 1,
    alignSelf: 'stretch',

    backgroundColor: '#fefefe',

    borderBottomWidth: 1,
    borderColor: '#cbcbcb',

    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingRight: 16,
  },
  
  topicTitle: {
    fontSize: 18,
    color: 'black'
  },
});

export default topicsListItemStyles;
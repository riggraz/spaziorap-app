import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text
} from 'react-native';

const TopicInfo = ({selectedTopicName, handlePress}) =>
  <View style={styles.topicInfoBox}>
    <Text style={styles.headerTitle}>{selectedTopicName}</Text>
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.allTopics}>●●●</Text>
    </TouchableOpacity>
  </View>

export default TopicInfo;

const styles = StyleSheet.create({
  topicInfoBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',

    marginLeft: 16,
  },

  allTopics: {
    color: '#F15946',
    backgroundColor: 'white',
    fontSize: 10,

    borderRadius: 36,

    marginLeft: 8,

    paddingTop: 4,
    paddingLeft: 4,
    paddingBottom: 4,
    paddingRight: 4,
  }
});
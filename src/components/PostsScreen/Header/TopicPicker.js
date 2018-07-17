import React from 'react';

import {
  Picker,
  StyleSheet,
  View,
  Text
} from 'react-native';

const TopicPicker = ({topics, selectedTopic, handleTopicChange}) =>
  <View>
    <Picker
      selectedValue={selectedTopic}
      onValueChange={topic => handleTopicChange(topic)}
      style={styles.picker}
    >
      <Picker.Item label='RECENTI' value='latest' />
      <Picker.Item label='DI MODA' value='trending' />
      {
        topics.map(topic =>
          <Picker.Item label={topic.name} value={topic.id} key={topic.id} />
        )
      }
    </Picker>
  </View>

export default TopicPicker;

const styles = StyleSheet.create({
  picker: {
    flex: -1,
    width: 200,
    minWidth: 150,
    color: 'white',
  }
});
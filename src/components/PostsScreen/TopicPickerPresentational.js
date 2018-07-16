import React from 'react';

import {Picker, StyleSheet} from 'react-native';

const TopicPickerPresentational = ({topics, selectedTopic, handleTopicChange}) =>
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

export default TopicPickerPresentational;

const styles = StyleSheet.create({
  picker: {
    flex: -1,
    width: 200,
    minWidth: 150,
    color: 'white',
  }
});
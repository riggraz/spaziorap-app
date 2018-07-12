import React from 'react';

import {Picker} from 'react-native';

const TopicPickerPresentational = ({topics, selectedTopic, handleTopicChange}) =>
  <Picker
    selectedValue={selectedTopic}
    onValueChange={topic => handleTopicChange(topic)}
    style={{width: 200}}
  >
    {
      topics.map(topic =>
        <Picker.Item label={topic.name} value={topic.id} key={topic.id} />
      )
    }
  </Picker>

export default TopicPickerPresentational;
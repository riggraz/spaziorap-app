import React from 'react';
import {
  Picker,
  View,
} from 'react-native';

import formStyles from '../../styles/formStyles';

const TopicPicker = ({topics, selectedTopic, handleTopicChange}) => (
  <View style={formStyles.pickerWrapper}>
    <Picker
      selectedValue={selectedTopic}
      onValueChange={value => handleTopicChange(value)}
      mode='dropdown'
      style={formStyles.picker}
    >
      <Picker.Item label='nessuna categoria' value={1} />
      {
        topics.map(topic =>
          <Picker.Item label={topic.name} value={topic.id} key={topic.id} />
        )
      }
    </Picker>
  </View>
);

export default TopicPicker;

import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

import topicsListItemStyles from '../../styles/topicsListItemStyles';

const TopicsListItem = ({name, handlePress}) =>
  <TouchableOpacity onPress={handlePress}>
    <View style={topicsListItemStyles.topicBox}>
      <Text style={topicsListItemStyles.topicTitle}>{name}</Text>
    </View>
  </TouchableOpacity>

export default TopicsListItem;
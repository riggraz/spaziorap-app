import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
} from 'react-native';

import topicsListItemStyles from '../../styles/topicsListItemStyles';

import {WEBSITE_URL} from '../../constants/API';

const TopicsListItem = ({name, handlePress}) =>
  <TouchableOpacity onPress={handlePress}>
    <View style={topicsListItemStyles.topicBox}>
      <Image
        source={{uri: `${WEBSITE_URL}/app/images/topics/${name}.png`}}
        style={topicsListItemStyles.icon}
      />
      <Text style={topicsListItemStyles.topicTitle}>{name}</Text>
    </View>
  </TouchableOpacity>

export default TopicsListItem;
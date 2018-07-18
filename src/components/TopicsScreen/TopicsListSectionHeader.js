import React from 'react';
import {Text} from 'react-native';

import topicsListItemStyles from '../../styles/topicsListItemStyles';

const TopicsListSectionHeader = ({title}) =>
  <Text style={topicsListItemStyles.topicSectionHeader}>
    {title}
  </Text>

export default TopicsListSectionHeader;
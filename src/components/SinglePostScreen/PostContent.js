import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import postStyles from '../../styles/postStyles';

const PostContent = ({title, body}) =>
  <View style={postStyles.postContentBox}>
    <Text style={postStyles.title}>{title}</Text>
    <Text style={postStyles.body}>{body}</Text>
  </View>

export default PostContent;
import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

import postListItemStyles from '../../styles/postListItemStyles';

const PostsListItemInfoBox = ({user, topic, createdAt, handleTopicChange}) =>
  <View style={postListItemStyles.infoBox}>
    <TouchableOpacity onPress={() => null}>
      <Text style={postListItemStyles.infoBoxText}>👤 {user}</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={handleTopicChange}>
      <Text style={postListItemStyles.infoBoxText}>📚 {topic}</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => null}>
      <Text style={postListItemStyles.infoBoxText}>⏳ {createdAt}</Text>
    </TouchableOpacity>
  </View>

export default PostsListItemInfoBox;
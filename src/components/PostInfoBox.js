import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

import postInfoBoxStyles from '../styles/postInfoBoxStyles';

const PostInfoBox = ({user, topic, createdAt, handleTopicChange}) =>
  <View style={postInfoBoxStyles.infoBox}>
    <TouchableOpacity onPress={() => null}>
      <Text style={postInfoBoxStyles.infoBoxText}>👤 {user}</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={handleTopicChange}>
      <Text style={postInfoBoxStyles.infoBoxText}>📚 {topic}</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => null}>
      <Text style={postInfoBoxStyles.infoBoxText}>⏳ {createdAt}</Text>
    </TouchableOpacity>
  </View>

export default PostInfoBox;
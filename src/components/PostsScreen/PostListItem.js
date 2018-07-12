import React from 'react';
import {
  TouchableOpacity,
  View,
  Text
} from 'react-native';

import postListItemStyles from '../../styles/postListItemStyles';

const PostListItem = ({title, excerpt}) =>
  <TouchableOpacity onPress={() => null}>
  <View style={postListItemStyles.postBox}>
    <Text style={postListItemStyles.postTitle}>{title}</Text>
    <Text style={postListItemStyles.postExcerpt}>{excerpt}</Text>
  </View>
  </TouchableOpacity>

export default PostListItem;
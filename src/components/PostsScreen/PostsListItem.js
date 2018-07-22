import React from 'react';
import {
  TouchableOpacity,
  View,
  Text
} from 'react-native';

import PostInfoBox from '../PostInfoBox';

import postListItemStyles from '../../styles/postListItemStyles';

const PostsListItem = ({title, excerpt, user, topic, createdAt, handleTopicChange, handlePress}) =>
  <View style={postListItemStyles.postBox}>
    <TouchableOpacity onPress={handlePress}>
      <Text style={postListItemStyles.postTitle}>{title}</Text>
      <Text style={postListItemStyles.postExcerpt}>{excerpt}</Text>
    </TouchableOpacity>
    <PostInfoBox
      user={user}
      topic={topic}
      createdAt={createdAt}
      handleTopicChange={handleTopicChange}
    />
  </View>

export default PostsListItem;
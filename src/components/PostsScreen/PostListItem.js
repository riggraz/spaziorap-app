import React from 'react';
import {
  TouchableOpacity,
  View,
  Text
} from 'react-native';

import PostsListItemInfoBox from './PostsListItemInfoBox';

import postListItemStyles from '../../styles/postListItemStyles';

const PostsListItem = ({title, excerpt, user, topic, createdAt, handleTopicChange}) =>
  <View style={postListItemStyles.postBox}>
    <TouchableOpacity onPress={() => null}>
      <Text style={postListItemStyles.postTitle}>{title}</Text>
      <Text style={postListItemStyles.postExcerpt}>{excerpt}</Text>
    </TouchableOpacity>
    <PostsListItemInfoBox
      user={user}
      topic={topic}
      createdAt={createdAt}
      handleTopicChange={handleTopicChange}
    />
  </View>

export default PostsListItem;
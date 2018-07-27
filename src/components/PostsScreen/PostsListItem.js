import React from 'react';
import {
  TouchableOpacity,
  View,
  Text
} from 'react-native';

import PostBody from './PostBody';
import PostVideo from './PostVideo';
import PostInfoBox from '../PostInfoBox';

import postListItemStyles from '../../styles/postListItemStyles';

const PostsListItem = ({title, body, url, user, topic, createdAt, handleTopicChange, handlePress}) =>
  <View style={postListItemStyles.postBox}>
    <TouchableOpacity onPress={handlePress}>
      <Text style={postListItemStyles.postTitle}>{title}</Text>
    </TouchableOpacity>
      {
        body ?
          <TouchableOpacity onPress={handlePress}><PostBody body={body} /></TouchableOpacity>
        :
          <PostVideo url={url} />
      }
    <PostInfoBox
      user={user}
      topic={topic}
      createdAt={createdAt}
      handleTopicChange={handleTopicChange}
    />
  </View>

export default PostsListItem;
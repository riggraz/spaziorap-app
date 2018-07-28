import React from 'react';
import {
  TouchableOpacity,
  View,
  Text
} from 'react-native';

import PostBody from './PostBody';
import PostVideoThumbnail from './PostVideoThumbnail';
import PostInfoBox from '../PostInfoBox';

import postListItemStyles from '../../styles/postListItemStyles';

const PostsListItem = ({
  title,
  body,
  url,
  user,
  topic,
  createdAt,
  
  handleProfileChange,
  handleTopicChange,
  handlePress
}) => (
  <View style={postListItemStyles.postBox}>
    <TouchableOpacity onPress={handlePress}>
      <Text style={postListItemStyles.postTitle}>
        {
          body ?
            '📃 '
          :
            '🎬 '
        }
        {title}
      </Text>
      
      {
        body ?
          <PostBody body={body} />
        :
          <PostVideoThumbnail url={url} />
      }
    </TouchableOpacity>

    <PostInfoBox
      user={user}
      topic={topic}
      createdAt={createdAt}

      handleProfileChange={handleProfileChange}
      handleTopicChange={handleTopicChange}
    />
  </View>
);

export default PostsListItem;
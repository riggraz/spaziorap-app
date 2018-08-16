import React from 'react';
import {
  TouchableOpacity,
  View,
  Text
} from 'react-native';

import VideoThumbnail from '../../containers/VideoThumbnail';
import PostBody from './PostBody';
import PostInfoBox from '../PostInfoBox';

import globalStyles from '../../styles/globalStyles';
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
  <View style={globalStyles.box}>
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
    </TouchableOpacity>
    
    {
      body ?
        <PostBody body={body} handlePress={handlePress} />
      :
        <VideoThumbnail url={url} />
    }

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
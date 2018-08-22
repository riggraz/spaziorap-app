import React from 'react';
import {
  TouchableOpacity,
  View,
  Text
} from 'react-native';

import VideoThumbnail from '../../containers/VideoThumbnail';
import PostBody from './PostBody';
import PostInfoBox from '../PostInfoBox';

import LikeBox from '../../containers/LikeBox';

import globalStyles from '../../styles/globalStyles';
import postListItemStyles from '../../styles/postListItemStyles';

const PostsListItem = ({
  id,
  title,
  body,
  url,
  user,
  topic,
  createdAt,
  
  handleProfileChange,
  handleTopicChange,
  handlePress,

  horizontal,

  branch,
}) => (
  <View style={horizontal ? globalStyles.horizontalBox : globalStyles.box}>
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
          <PostBody body={body} handlePress={handlePress} />
        :
          <VideoThumbnail url={url} />
      }
    </TouchableOpacity>

    <PostInfoBox
      user={user}
      topic={topic}
      createdAt={createdAt}

      handleProfileChange={handleProfileChange}
      handleTopicChange={handleTopicChange}
    />

    <LikeBox postId={id} branch={branch} margin />
  </View>
);

export default PostsListItem;
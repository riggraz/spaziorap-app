import React from 'react';
import {
  View,
  TouchableOpacity
} from 'react-native';

import PostBody from './PostBody';
import VideoThumbnail from '../../containers/VideoThumbnail';

import postListItemStyles from '../../styles/postListItemStyles';

const PostContent = ({body, url, handlePress}) => (
  <View style={postListItemStyles.postContent}>
    <TouchableOpacity onPress={handlePress} style={{flex: 3,}}>
      <PostBody body={body} makeExcerpt />
    </TouchableOpacity>
    {
      url ?
        <VideoThumbnail url={url} height={80} />
      :
        null
    }
  </View>
);

export default PostContent;
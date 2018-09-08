import React from 'react';
import {
  View,
} from 'react-native';

import PostBody from '../PostsScreen/PostBody';
import VideoThumbnail from '../../containers/VideoThumbnail';

import postStyles from '../../styles/postStyles';

const PostContent = ({body, url}) =>
  <View>
    <PostBody body={body} />
    {
      url ?
        <VideoThumbnail url={url} height={160} />
      :
        null
    }
  </View>

export default PostContent;
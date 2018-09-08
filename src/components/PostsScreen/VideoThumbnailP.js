import React from 'react';
import {
  Image,
  TouchableOpacity,
} from 'react-native';

import postListItemStyles from '../../styles/postListItemStyles';

import getVideoId from '../../helpers/getVideoId';

const VideoThumbnailP = ({url, height, handlePlayVideo}) => (
  <TouchableOpacity onPress={() => handlePlayVideo(getVideoId(url))} style={postListItemStyles.postVideoThumbnail}>
    <Image
      source={{uri: `https://img.youtube.com/vi/${getVideoId(url)}/0.jpg`}}
      style={{height: height}}
    />
  </TouchableOpacity>
);

export default VideoThumbnailP;
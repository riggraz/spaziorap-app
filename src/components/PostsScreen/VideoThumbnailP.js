import React from 'react';
import {
  Image,
  TouchableOpacity,
} from 'react-native';

import postListItemStyles from '../../styles/postListItemStyles';

import getVideoId from '../../helpers/getVideoId';

const VideoThumbnailP = ({url, handlePlayVideo}) => (
  <TouchableOpacity onPress={() => handlePlayVideo(getVideoId(url))}>
    <Image
      source={{uri: `https://img.youtube.com/vi/${getVideoId(url)}/0.jpg`}}
      style={{height: 170, marginBottom: 8}}
    />
  </TouchableOpacity>
);

export default VideoThumbnailP;
import React from 'react';
import {
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';

import postVideoThumbnailStyles from '../../styles/postVideoThumbnailStyles';

import getVideoId from '../../helpers/getVideoId';

import {LARGE} from '../../constants/sizes';

const VideoThumbnailP = ({url, handlePlayVideo, size}) => (
  <TouchableOpacity
    onPress={() => handlePlayVideo(getVideoId(url))}
    style={[
      postVideoThumbnailStyles.postVideoThumbnail,
      size === LARGE ?
        postVideoThumbnailStyles.postVideoThumbnailBig
      :
        postVideoThumbnailStyles.postVideoThumbnailNormal
    ]}
  >
    <Image
      source={{uri: `https://img.youtube.com/vi/${getVideoId(url)}/0.jpg`}}
      style={
        size === LARGE ?
          postVideoThumbnailStyles.postVideoThumbnailImageBig
        :
          postVideoThumbnailStyles.postVideoThumbnailImage
      }
    />

    <Text style={postVideoThumbnailStyles.playArrow}>▶</Text>
  </TouchableOpacity>
);

export default VideoThumbnailP;
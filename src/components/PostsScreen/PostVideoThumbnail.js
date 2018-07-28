import React from 'react';
import {Image} from 'react-native';

import postListItemStyles from '../../styles/postListItemStyles';

import getVideoId from '../../helpers/getVideoId';

const PostVideoThumbnail = ({url}) => (
  <Image
    source={{uri: `https://img.youtube.com/vi/${getVideoId(url)}/0.jpg`}}
    style={{height: 170}}
  />
);

export default PostVideoThumbnail;
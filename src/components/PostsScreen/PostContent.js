import React from 'react';
import {
  View,
  TouchableOpacity
} from 'react-native';

import PostBody from './PostBody';
import VideoThumbnail from '../../containers/VideoThumbnail';

import postListItemStyles from '../../styles/postListItemStyles';

import {MEDIUM} from '../../constants/sizes';

const PostContent = ({body, url, handlePress, horizontal}) => (
  <View style={[
    postListItemStyles.postContent,
    horizontal ? {flexDirection: 'column'} : {flexDirection: 'row'},
  ]}>
    <TouchableOpacity onPress={handlePress} style={horizontal ? {width: '100%'} : {flex: 1}}>
      <PostBody body={body} makeExcerpt horizontal={horizontal} hasUrl={url} />
    </TouchableOpacity>

    { url ? <VideoThumbnail url={url} size={MEDIUM} /> : null }
  </View>
);

export default PostContent;
import React from 'react';
import {View} from 'react-native';

import PostBody from '../PostsScreen/PostBody';
import VideoThumbnail from '../../containers/VideoThumbnail';
import Divider from '../Divider';

import postStyles from '../../styles/postStyles';

import {LARGE} from '../../constants/sizes';
import {BOX_BORDER_COLOR} from '../../constants/colors';

const PostContent = ({body, url}) => (
  <View>
    <PostBody body={body} />
    { url ? <Divider color={BOX_BORDER_COLOR} size={1} /> : null }
    { url ? <VideoThumbnail url={url} size={LARGE} /> : null }
  </View>
);

export default PostContent;
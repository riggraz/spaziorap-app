import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import PostContentBody from './PostContentBody';
import PostContentVideo from './PostContentVideo';

import postStyles from '../../styles/postStyles';

const PostContent = ({title, body, url}) =>
  <View style={postStyles.postContentBox}>
    <Text style={postStyles.title}>{title}</Text>
    {
      body ?
        <PostContentBody body={body} />
      :
        <PostContentVideo url={url} />
    }
  </View>

export default PostContent;
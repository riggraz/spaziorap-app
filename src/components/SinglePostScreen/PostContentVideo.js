import React from 'react';
import {WebView} from 'react-native';

const PostContentVideo = ({url}) => (
  <WebView
    style={{flex: -1, width: '100%', height: 300}}
    javaScriptEnabled={true}
    source={{uri: `https://www.youtube.com/embed/${getVideoId(url)}?rel=0&autoplay=0&showinfo=0&controls=0`}}
  />
);

export default PostContentVideo;
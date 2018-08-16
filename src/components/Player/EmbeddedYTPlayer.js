import React from 'react';
import {WebView} from 'react-native';

const EmbeddedYTPlayer = ({videoId}) => (
  <WebView
    source={{uri: `http://html5examples.altervista.org/player-spaziorap2.html?videoId=${videoId}`}}
    javaScriptEnabled={true}
    mediaPlaybackRequiresUserAction={false}
    style={{width: 360, height: 150,}}
  />
);

export default EmbeddedYTPlayer;
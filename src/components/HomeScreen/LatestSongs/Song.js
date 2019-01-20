import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import postListItemStyles from '../../../styles/postListItemStyles';

import getVideoId from '../../../helpers/getVideoId';

import songStyles from '../../../styles/songStyles';

const Song = ({name, artistName, url, handlePlaySong}) => (
  <TouchableOpacity onPress={() => handlePlaySong(getVideoId(url))}>
    <View style={songStyles.box}>
      <Text style={songStyles.songName}>{name} - {artistName}</Text>

      <Image
        source={{uri: `https://img.youtube.com/vi/${getVideoId(url)}/0.jpg`}}
        style={{height: 90, marginBottom: 8}}
      />
    </View>
  </TouchableOpacity>
);

export default Song;
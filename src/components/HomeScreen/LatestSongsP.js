import React from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
} from 'react-native';

import Song from './Song';

import globalStyles from '../../styles/globalStyles';
import homeStyles from '../../styles/homeStyles';

const LatestSongsP = ({songs, areFetching, handlePlaySong}) => (
  <View style={globalStyles.hiddenBox}>
    <Text style={homeStyles.title}>Ultime uscite</Text>
    <FlatList
      data={songs}
      renderItem={({item}) =>
        <Song
          name={item.name}
          artist={item.artist}
          url={item.url}
          handlePlaySong={songId => handlePlaySong(songId)}
        />
      }
      keyExtractor={song => song.id.toString()}
      horizontal
    />
  </View>
);

export default LatestSongsP;
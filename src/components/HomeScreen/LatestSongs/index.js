import React from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
} from 'react-native';

import Song from './Song';

import SkeletonLoadingSong from '../../SkeletonLoading/SkeletonLoadingSong';

import globalStyles from '../../../styles/globalStyles';
import homeStyles from '../../../styles/homeStyles';

const LatestSongsP = ({songs, foreign, areFetching, handlePlaySong}) => (
    <View style={globalStyles.hiddenBox}>
      <Text style={homeStyles.title}>
        {foreign ? '🇺🇸 ' : '🇮🇹 '}
        Ultime uscite in {foreign ? 'America' : 'Italia'}
      </Text>
      {
        !areFetching ?
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
        :
        <View style={{flex: 1, flexDirection: 'row'}}>
          <SkeletonLoadingSong />
          <SkeletonLoadingSong />
          <SkeletonLoadingSong />
        </View>
      }
    </View>
);

export default LatestSongsP;
import React from 'react';
import {
  View,
  Text,
  FlatList,
} from 'react-native';

import Song from './Song';

import SkeletonLoadingSong from '../../SkeletonLoading/SkeletonLoadingSong';

import globalStyles from '../../../styles/globalStyles';
import homeStyles from '../../../styles/homeStyles';

const LatestSongsP = ({songs, areFetching, artists, handlePlaySong}) => (
    <View style={globalStyles.hiddenBox}>
      <Text style={homeStyles.title}>
        ultime uscite
      </Text>
      {
        !areFetching ?
          <FlatList
            data={songs}
            renderItem={({item}) =>
              <Song
                name={item.name}
                artistName={artists.find(artist => artist.id == item.artistId) && artists.find(artist => artist.id == item.artistId).name}
                url={item.url}
                handlePlaySong={songId => handlePlaySong(songId)}
              />
            }
            keyExtractor={song => song.id.toString()}

            getItemLayout={
              (data, index) =>
                ({
                  length: 200, //width of a Song as specified in songStyles.js
                  offset: 200 * index,
                  index
                })
            }

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
import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import EmbeddedYTPlayer from './EmbeddedYTPlayer';

import playerStyles from '../../styles/playerStyles';

const PlayerP = ({videoId, visible}) => (
  visible ?
    <View style={playerStyles.playerBox}>
      <EmbeddedYTPlayer videoId={videoId} />
    </View>
  :
    null
);

export default PlayerP;
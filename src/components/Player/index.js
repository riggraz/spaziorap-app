import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import EmbeddedYTPlayer from './EmbeddedYTPlayer';

import playerStyles from '../../styles/playerStyles';

const PlayerP = ({videoId, visible, handleHide}) => (
  visible ?
    <View style={playerStyles.playerBox}>
      <EmbeddedYTPlayer videoId={videoId} />
      <TouchableOpacity onPress={handleHide}>
        <Text>Chiudi</Text>
      </TouchableOpacity>
    </View>
  :
    null
);

export default PlayerP;
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import EmbeddedYTPlayer from './EmbeddedYTPlayer';

const PlayerInterface = ({videoId, handleHide}) => (
  <View>
    <TouchableOpacity onPress={handleHide} style={{backgroundColor: 'white'}}>
      <Text style={{marginLeft: 4}}>X Chiudi</Text>
    </TouchableOpacity>

    <EmbeddedYTPlayer videoId={videoId} />
  </View>
);

export default PlayerInterface;
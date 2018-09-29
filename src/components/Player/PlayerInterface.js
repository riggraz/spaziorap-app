import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

import EmbeddedYTPlayer from './EmbeddedYTPlayer';

import playerStyles from '../../styles/playerStyles';

const PlayerInterface = ({videoId, handleHide, handleMinimize}) => (
  <View style={playerStyles.player}>
    <View style={playerStyles.topBar}>
      <TouchableOpacity onPress={handleHide} style={playerStyles.topBarButton}>
        <Text style={playerStyles.topBarText}>x chiudi</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleMinimize} style={playerStyles.topBarButton}>
        <Text style={playerStyles.topBarText}>minimizza -</Text>
      </TouchableOpacity>
    </View>

    <View style={playerStyles.embeddedYTPlayer}>
      <Image source={require('../../../assets/images/playerLoading.gif')} style={playerStyles.loading} />
      <EmbeddedYTPlayer videoId={videoId} />
    </View>
  </View>
);

export default PlayerInterface;
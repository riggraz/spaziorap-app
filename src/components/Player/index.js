import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import Draggable from './Draggable';

const PlayerP = ({videoId, visible, handleHide}) => (
  visible ?
    <Draggable
      videoId={videoId}
      handleHide={handleHide}
    />
  :
    null
);

export default PlayerP;
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import Draggable from './Draggable';

const PlayerP = ({videoId, open, handleHide}) => (
  open ? (
    <Draggable
      videoId={videoId}
      handleHide={handleHide}
    />
  )
  :
    null
);

export default PlayerP;
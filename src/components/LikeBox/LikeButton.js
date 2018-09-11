import React from 'react';
import {
  TouchableOpacity,
  Text,
} from 'react-native';

import likeBoxStyles from '../../styles/likeBoxStyles';

const LikeButton = ({emoji, handleLike}) => (
  <TouchableOpacity onPress={handleLike}>
    <Text style={likeBoxStyles.buttonText}>
      {emoji}
    </Text>
  </TouchableOpacity>
);

export default LikeButton;
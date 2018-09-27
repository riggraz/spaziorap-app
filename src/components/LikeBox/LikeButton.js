import React from 'react';
import {
  TouchableOpacity,
  Text,
} from 'react-native';

import likeBoxStyles from '../../styles/likeBoxStyles';

const LikeButton = ({emoji, handleLike, type}) => (
  <TouchableOpacity onPress={handleLike}>
    <Text style={type === 'comment' ? likeBoxStyles.buttonTextSmall : likeBoxStyles.buttonText}>
      {emoji}
    </Text>
  </TouchableOpacity>
);

export default LikeButton;
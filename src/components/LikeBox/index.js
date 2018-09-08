import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import LikeButton from './LikeButton';

import likeBoxStyles from '../../styles/likeBoxStyles';

const LikeBoxP = ({postId, score, handleLike, accessToken}) => (
  <View style={likeBoxStyles.box}>
    <LikeButton
      emoji='👍🏻'
      handleLike={() => handleLike(postId, 1, accessToken)}
    />
    <Text style={likeBoxStyles.scoreText}>{score}</Text>
    <LikeButton
      emoji='👎🏻'
      handleLike={() => handleLike(postId, -1, accessToken)}
    />
  </View>
);

export default LikeBoxP;
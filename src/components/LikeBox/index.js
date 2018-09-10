import React from 'react';
import {
  View,
  Text,
  Alert,
} from 'react-native';

import LikeButton from './LikeButton';

import likeBoxStyles from '../../styles/likeBoxStyles';

const displayAlert = () => Alert.alert('Devi essere loggato');

const LikeBoxP = ({postId, score, handleLike, accessToken, isLoggedIn}) => (
  <View style={likeBoxStyles.box}>
    <LikeButton
      emoji='👍🏻'
      handleLike={
        () => (
          isLoggedIn ? handleLike(postId, 1, accessToken) : displayAlert()
        )
      }
    />
    <Text style={likeBoxStyles.scoreText}>{score}</Text>
    <LikeButton
      emoji='👎🏻'
      handleLike={
        () => (
          isLoggedIn ? handleLike(postId, -1, accessToken) : displayAlert()
        )
      }
    />
  </View>
);

export default LikeBoxP;
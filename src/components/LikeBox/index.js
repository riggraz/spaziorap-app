import React from 'react';
import {
  View,
  Text,
  Alert,
} from 'react-native';

import LikeButton from './LikeButton';

import likeBoxStyles from '../../styles/likeBoxStyles';

const displayAlert = () => Alert.alert('Devi essere loggato');

const LikeBoxP = ({type, id, score, handleLike, accessToken, isLoggedIn}) => (
  <View style={likeBoxStyles.box}>
    <LikeButton
      emoji='👍🏻'
      handleLike={
        () => (
          isLoggedIn ? handleLike(type, id, 1, accessToken) : displayAlert()
        )
      }
      type={type}
    />
    <Text style={type === 'comment' ? likeBoxStyles.scoreTextSmall : likeBoxStyles.scoreText}>{score}</Text>
    <LikeButton
      emoji='👎🏻'
      handleLike={
        () => (
          isLoggedIn ? handleLike(type, id, -1, accessToken) : displayAlert()
        )
      }
      type={type}
    />
  </View>
);

export default LikeBoxP;
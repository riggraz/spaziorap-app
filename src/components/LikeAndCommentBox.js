import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import LikeBox from '../containers/LikeBox';

import likeAndCommentBoxStyles from '../styles/likeAndCommentBoxStyles';

const LikeAndCommentBox = ({postId, branch}) => (
  <View style={likeAndCommentBoxStyles.container}>
    <LikeBox postId={postId} branch={branch} />
    <Text style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', textAlign: 'right', fontSize: 24}}>
      <MaterialCommunityIcons name='comment-multiple-outline' size={26} color='black' /> 0
    </Text>
  </View>
);

export default LikeAndCommentBox;
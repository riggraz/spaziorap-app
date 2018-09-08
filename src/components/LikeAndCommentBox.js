import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import LikeBox from '../containers/LikeBox';

const LikeAndCommentBox = ({postId, branch}) => (
  <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
    <LikeBox postId={postId} branch={branch} />
    <Text style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', textAlign: 'right', fontSize: 18}}>💬 0</Text>
  </View>
);

export default LikeAndCommentBox;
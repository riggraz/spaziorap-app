import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

import LikeBox from '../../../containers/LikeBox';

const CommentInfoBox = ({
  commentId,
  username,
  newCommentOpen,
  
  handleReplyPress,
  handleProfileChange,
  
  postId,
  branch
}) => (
  <View style={styles.infoBox}>
    <TouchableOpacity onPress={handleProfileChange}>
      <Text style={styles.infoBoxText}>👤 {username}</Text>
    </TouchableOpacity>

    <View>
      <LikeBox type='comment' id={commentId} branch={branch} />
    </View>

    <TouchableOpacity onPress={handleReplyPress}>
      {
        newCommentOpen ?
          <Text>✖️ elimina</Text>
        :
          <Text>💬 rispondi</Text>
      }
    </TouchableOpacity>
  </View>
);

export default CommentInfoBox;

const styles = StyleSheet.create({
  infoBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  infoBoxText: {
    color: 'white',
    backgroundColor: '#a0a0a0',

    fontSize: 11,

    paddingVertical: 2,
    paddingHorizontal: 4,

    marginBottom: 4,

    borderRadius: 36,
  },
});
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import CommentInfoBox from './CommentInfoBox';

import globalStyles from '../../../styles/globalStyles';

const Comment = ({id, body, username, createdAt, level, ...other}) => (
  <View
    style={[
      globalStyles.box,
      {
        marginLeft: 8 + 16 * level,
        marginTop: 0,
        marginBottom: 4,
      },
    ]}
  >
    <CommentInfoBox
      commentId={id}
      username={username}
      
      {...other}
    />

    <Text style={styles.bodyText}>{body}</Text>
  </View>
);

export default Comment;

const styles = StyleSheet.create({
  bodyText: {
    fontSize: 17,
  },
});
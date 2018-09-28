import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import CommentInfoBox from './CommentInfoBox';
import NewCommentForm from './NewCommentForm';

import globalStyles from '../../../styles/globalStyles';

class Comment extends React.Component {
  constructor() {
    super();

    this.state = {
      newCommentOpen: false,
    };
  }

  render() {
    const {
      id,
      body,
      handleCommentSubmit,
      username,
      createdAt,
      level,
      ...other,
    } = this.props;
    const {newCommentOpen} = this.state;

    return (
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
          newCommentOpen={newCommentOpen}
          handleReplyPress={() => this.setState({newCommentOpen: !this.state.newCommentOpen})}
          
          {...other}
        />

        <Text style={styles.bodyText}>{body}</Text>

        {
          newCommentOpen ?
            <NewCommentForm
              handleCommentSubmit={
                (commentText, postId, parentId, accessToken) => {
                  handleCommentSubmit(commentText, postId, parentId, accessToken);
                  this.setState({newCommentOpen: false});
                }
              }
              parentId={id}
              isSubmitting={other.newCommentIsSubmitting}
        
              postId={other.postId}
              accessToken={other.accessToken}
            />
          :
            null
        }
      </View>
    );
  }
}

export default Comment;

const styles = StyleSheet.create({
  bodyText: {
    fontSize: 17,
  },
});
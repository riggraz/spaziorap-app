import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import NewCommentForm from './NewCommentForm';
import Comments from './Comments';

const CommentsSection = ({comments, handleCommentSubmit, ...other}) => (
  <View>
    <NewCommentForm
      handleCommentSubmit={handleCommentSubmit}
      parentId={null}
      isSubmitting={other.newCommentIsSubmitting}

      postId={other.postId}

      isLoggedIn={other.isLoggedIn}
      accessToken={other.accessToken}
      navigation={other.navigation}
    />

    <Comments
      comments={comments}
      handleCommentSubmit={handleCommentSubmit}
      parentId={null}
      level={0}
      
      {...other}
    />
  </View>
);

export default CommentsSection;
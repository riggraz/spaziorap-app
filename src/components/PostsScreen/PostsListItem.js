import React from 'react';
import {View, TouchableWithoutFeedback} from 'react-native';

import PostInfoBox from '../PostInfoBox';
import PostContent from './PostContent';
import LikeAndCommentBox from '../LikeAndCommentBox';
import DeleteButton from './DeleteButton';

import globalStyles from '../../styles/globalStyles';
import postListItemStyles from '../../styles/postListItemStyles';

const PostsListItem = ({
  id,
  body,
  url,
  user,
  topic,
  commentsCount,
  createdAt,
  
  handleProfileChange,
  handleTopicChange,
  handlePress,

  admin,
  handleDeletePost,

  horizontal,
  branch,
}) => (
  <TouchableWithoutFeedback onPress={handlePress}>
    <View style={horizontal ? globalStyles.horizontalBox : globalStyles.box}>
      <PostInfoBox
        user={user}
        topic={topic}
        createdAt={createdAt}

        handleProfileChange={handleProfileChange}
        handleTopicChange={handleTopicChange}
      />

      <PostContent
        body={body}
        url={url}
        handlePress={handlePress}
        horizontal={horizontal}
      />

      <LikeAndCommentBox
        postId={id}
        commentsCount={commentsCount}
        branch={branch}
      />

      {admin ? <DeleteButton handleDeletePost={handleDeletePost} /> : null}
    </View>
  </TouchableWithoutFeedback>
);

export default PostsListItem;
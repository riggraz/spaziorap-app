import React from 'react';
import {View, TouchableWithoutFeedback} from 'react-native';

import PostInfoBox from '../PostInfoBox';
import PostContent from './PostContent';
import LikeAndCommentBox from '../LikeAndCommentBox';

import globalStyles from '../../styles/globalStyles';
import postListItemStyles from '../../styles/postListItemStyles';

const PostsListItem = ({
  id,
  body,
  url,
  user,
  topic,
  createdAt,
  
  handleProfileChange,
  handleTopicChange,
  handlePress,

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
        branch={branch}
      />
    </View>
  </TouchableWithoutFeedback>
);

export default PostsListItem;
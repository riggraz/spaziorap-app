import React from 'react';
import {View} from 'react-native';

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
    />

    <LikeAndCommentBox
      postId={id}
      branch={branch}
    />
  </View>
);

export default PostsListItem;
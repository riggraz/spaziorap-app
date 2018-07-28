import React from 'react';
import {
  ScrollView,
} from 'react-native';

import PostInfoBox from '../PostInfoBox';
import PostContent from './PostContent';

import friendlyDate from '../../helpers/friendlyDate';

_getTopicName = (topicId, topics) => (
  (topicId && topics) ?
    topics.find(topic => topic.id === topicId).name
  :
    'nessuna'
);

const PostP = ({
  post,
  topics,
  
  handleProfileChange,
  handleTopicChange,
  navigateToProfile,
  navigateToPostsByTopic
}) =>
  <ScrollView>
    <PostInfoBox
      user={post.userUsername}
      topic={_getTopicName(post.topicId, topics)}
      createdAt={friendlyDate(post.createdAt)}

      handleProfileChange={
        () => {
          handleProfileChange(post.userId);
          navigateToProfile(post.userUsername);
        }
      }
      handleTopicChange={
        () => {
          const topicName = _getTopicName(post.topicId, topics);
          handleTopicChange(post.topicId, topicName);
          navigateToPostsByTopic(topicName);
        }
      }
    />

    <PostContent
      title={post.title}
      body={post.body}
      url={post.url}
    />
  </ScrollView>

export default PostP;
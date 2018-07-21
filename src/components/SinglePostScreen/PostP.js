import React from 'react';
import {
  ScrollView,
} from 'react-native';

import PostsListItemInfoBox from '../PostsScreen/PostsListItemInfoBox';
import PostContent from './PostContent';

import friendlyDate from '../../helpers/friendlyDate';

_getTopicName = (topicId, topics) => (
  (topicId && topics) ?
    topics.find(topic => topic.id === topicId).name
  :
    'nessuna'
);

const PostP = ({post, topics, handleTopicChange, navigateToPostsByTopic}) =>
  <ScrollView>
    <PostsListItemInfoBox
      user={post.userUsername}
      topic={_getTopicName(post.topicId, topics)}
      createdAt={friendlyDate(post.createdAt)}

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
    />
  </ScrollView>

export default PostP;
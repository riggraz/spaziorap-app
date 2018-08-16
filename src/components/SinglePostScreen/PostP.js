import React from 'react';
import {
  ScrollView,
  View,
} from 'react-native';

import PostInfoBox from '../PostInfoBox';
import PostContent from './PostContent';

import friendlyDate from '../../helpers/friendlyDate';

import globalStyles from '../../styles/globalStyles';
import postListItemStyles from '../../styles/postListItemStyles';

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
    <View style={globalStyles.box}>
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
    </View>

    <View style={globalStyles.box}>
      <PostContent
        title={post.title}
        body={post.body}
        url={post.url}
      />
    </View>
  </ScrollView>

export default PostP;
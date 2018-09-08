import React from 'react';
import {
  ScrollView,
  View,
  Text,
} from 'react-native';

import PostInfoBox from '../PostInfoBox';
import PostContent from './PostContent';
import LikeAndCommentBox from '../LikeAndCommentBox';

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
  navigateToPostsByTopic,

  branch,
}) => (
  (post !== undefined) ? (
    <ScrollView style={globalStyles.container}>
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
          body={post.body}
          url={post.url}
        />
      </View>

      <View style={globalStyles.box}>
        <LikeAndCommentBox postId={post.id} branch={branch} />
      </View>
    </ScrollView>
  ) : (
    <View style={globalStyles.box}>
      <Text>Si è verificato un errore nel recupero del post.</Text>
    </View>
  )
);

export default PostP;
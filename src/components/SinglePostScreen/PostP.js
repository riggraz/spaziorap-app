import React from 'react';
import {
  ScrollView,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';

import PostInfoBox from '../PostInfoBox';
import PostContent from './PostContent';
import LikeAndCommentBox from '../LikeAndCommentBox';
import CommentsSection from './CommentsSection';

import friendlyDate from '../../helpers/friendlyDate';

import globalStyles from '../../styles/globalStyles';
import postListItemStyles from '../../styles/postListItemStyles';
import homeStyles from '../../styles/homeStyles';
import {MAIN_COLOR} from '../../constants/colors';

class PostP extends React.Component {

  _getTopicName = (topicId, topics) => (
    (topicId && topics) ?
      topics.find(topic => topic.id === topicId).name
    :
      'nessuna'
  );

  render() {
    const {
      id,
      
      post,
      isFetching,
      error,

      topics,
      comments,
      commentsAreFetching,
      commentsPostId,
      newCommentIsSubmitting,
      fetchComments,
      
      handleCommentSubmit,
      handleProfileChange,
      handleTopicChange,
      navigateToProfile,
      navigateToPostsByTopic,

      isLoggedIn,
      accessToken,
      branch,
      navigation,
    } = this.props;

    if (post === undefined || error) {
      return (
        <View style={globalStyles.box}>
          <Text>Si è verificato un errore nel recupero del post.</Text>
        </View>
      );
    } else if (isFetching) {
      return (
        <ActivityIndicator size='large' color={MAIN_COLOR} />
      );
    } else {
      return (
        <ScrollView
          style={globalStyles.container}
          keyboardShouldPersistTaps='handled'
        >
          <View style={globalStyles.box}>
            <PostInfoBox
              user={post.userUsername}
              topic={this._getTopicName(post.topicId, topics)}
              createdAt={friendlyDate(post.createdAt)}

              handleProfileChange={
                () => {
                  handleProfileChange(post.userId);
                  navigateToProfile(post.userUsername);
                }
              }
              handleTopicChange={
                () => {
                  const topicName = this._getTopicName(post.topicId, topics);
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
            <LikeAndCommentBox postId={id} commentsCount={post.commentsCount} branch={branch} />
          </View>

          <Text style={homeStyles.title}>commenti</Text>
          {
            !commentsAreFetching ? (
              <CommentsSection
                comments={comments}
                handleCommentSubmit={handleCommentSubmit}
                newCommentIsSubmitting={newCommentIsSubmitting}

                handleProfileChange={
                  (userId, userUsername) => {
                    handleProfileChange(userId);
                    navigateToProfile(userUsername);
                  }
                }
                postId={post.id}

                isLoggedIn={isLoggedIn}
                accessToken={accessToken}
                branch={branch}
                navigation={navigation}
              />
            )
            :
              <ActivityIndicator size='large' color={MAIN_COLOR} />
          }

          <View style={{height: 300}} />
        </ScrollView>
      );
    }
  }
}

export default PostP;
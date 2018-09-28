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
  componentDidMount() {
    const {post, commentsPostId, fetchComments} = this.props;

    if (commentsPostId !== post.id) fetchComments(post.id);
  }

  _getTopicName = (topicId, topics) => (
    (topicId && topics) ?
      topics.find(topic => topic.id === topicId).name
    :
      'nessuna'
  );

  render() {
    const {
      post,
      topics,
      comments,
      commentsPostId,
      newCommentIsSubmitting,
      fetchComments,
      
      handleCommentSubmit,
      handleProfileChange,
      handleTopicChange,
      navigateToProfile,
      navigateToPostsByTopic,

      accessToken,
      branch,
    } = this.props;

    if (post === undefined) {
      return (
        <View style={globalStyles.box}>
          <Text>Si è verificato un errore nel recupero del post.</Text>
        </View>
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
            <LikeAndCommentBox postId={post.id} commentsCount={post.commentsCount} branch={branch} />
          </View>

          <Text style={homeStyles.title}>commenti</Text>
          {
            commentsPostId === post.id ? (
              <CommentsSection
                comments={comments}
                handleCommentSubmit={handleCommentSubmit}
                newCommentIsSubmitting={newCommentIsSubmitting}

                handleProfileChange={
                  () => {
                    handleProfileChange(post.userId);
                    navigateToProfile(post.userUsername);
                  }
                }
                postId={post.id}

                accessToken={accessToken}
                branch={branch}
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
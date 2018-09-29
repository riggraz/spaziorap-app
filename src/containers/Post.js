import {connect} from 'react-redux';

import PostP from '../components/SinglePostScreen/PostP';

import {fetchComments} from '../actions/requestComments';
import {fetchPosts} from '../actions/requestPosts';
import {selectTopic} from '../actions/selectTopic';
import {fetchProfilePosts} from '../actions/requestProfilePosts';
import {submitComment} from '../actions/submitComment';

const mapStateToProps = (state, ownProps) =>
  ({
    post: state.posts[ownProps.branch].items.find(post => post.id === ownProps.id),
    topics: state.topics.items,

    comments: state.currentPost.comments.items,
    commentsPostId: state.currentPost.comments.postId,
    newCommentIsSubmitting: state.currentPost.newComment.isSubmitting,

    isLoggedIn: state.user.isLoggedIn,
    accessToken: state.user.accessToken,
  });

const mapDispatchToProps = dispatch =>
  ({
    fetchComments(postId) {
      dispatch(fetchComments(postId));
    },

    handleProfileChange(userId) {
      dispatch(fetchProfilePosts(userId));
    },

    handleTopicChange(topicId, topicName) {
      dispatch(fetchPosts(topicId));
      dispatch(selectTopic(topicId));
    },

    handleCommentSubmit(commentText, postId, parentId, accessToken) {
      dispatch(submitComment(commentText, postId, parentId, accessToken));
    },
  });

const Post = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostP);

export default Post;
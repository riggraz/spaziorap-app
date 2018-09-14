import {connect} from 'react-redux';

import PostsListP from '../components/PostsScreen/PostsListP';

import {fetchPosts} from '../actions/requestPosts';
import {fetchLatestPosts} from '../actions/requestLatestPosts';
import {selectTopic} from '../actions/selectTopic';
import {fetchProfilePosts} from '../actions/requestProfilePosts';
import {deletePost} from '../actions/deletePost';

import {
  LATEST_BRANCH,
  TRENDING_BRANCH,
  SELECTEDTOPIC_BRANCH,
  PROFILE_BRANCH,
} from '../constants/branches';

const mapStateToProps = (state, ownProps) =>
  ({
    posts: state.posts[ownProps.branch].items,
    postsAreFetching: state.posts[ownProps.branch].areFetching,

    topics: state.topics.items,
    topicsAreFetching: state.topics.areFetching,

    //used only for handleRefresh
    selectedTopic: state.topics.selectedTopic,
    selectedProfile: state.posts.profile.items && state.posts.profile.items[0] && state.posts.profile.items[0].userId,

    admin: state.user.admin,
    accessToken: state.user.accessToken,
  });

const mapDispatchToProps = dispatch =>
  ({
    handleProfileChange(userId) {
      dispatch(fetchProfilePosts(userId));
    },

    handleTopicChange(topicId, topicName) {
      dispatch(fetchPosts(topicId));
      dispatch(selectTopic(topicId));
    },

    handleRefresh(whatToRefresh, id) {
      if (whatToRefresh === LATEST_BRANCH) dispatch(fetchLatestPosts());
      else if (whatToRefresh === TRENDING_BRANCH) 0//to implement
      else if (whatToRefresh === SELECTEDTOPIC_BRANCH) dispatch(fetchPosts(id));
      else if (whatToRefresh === PROFILE_BRANCH) dispatch(fetchProfilePosts(id));
    },

    handleDeletePost(postId, accessToken) {
      dispatch(deletePost(postId, accessToken));
    },
  });

const PostsList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostsListP);

export default PostsList;
import {connect} from 'react-redux';

import PostsListP from '../components/PostsScreen/PostsListP';

import {setCurrentPostId} from '../actions/setCurrentPostId';
import {fetchPost} from '../actions/requestPost';
import {fetchComments} from '../actions/requestComments';
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
import { fetchNotifications } from '../actions/requestNotifications';

const mapStateToProps = (state, ownProps) =>
  ({
    posts: state.posts[ownProps.branch].items,
    postsAreFetching: state.posts[ownProps.branch].areFetching,
    page: state.posts[ownProps.branch].page,
    endReached: state.posts[ownProps.branch].endReached,

    topics: state.topics.items,
    topicsAreFetching: state.topics.areFetching,

    //used only for handleRefresh and handleLoadMore
    selectedTopic: state.topics.selectedTopic,
    selectedProfile: state.posts.profile.items && state.posts.profile.items[0] && state.posts.profile.items[0].userId,

    loggedUserId: state.user.isLoggedIn ? state.user.id : 0,
    admin: state.user.admin,
    accessToken: state.user.accessToken,
  });

const mapDispatchToProps = dispatch =>
  ({
    handlePostPress(postId) {
      dispatch(setCurrentPostId(postId));
      dispatch(fetchPost(postId));
      dispatch(fetchComments(postId));
    },

    handleProfileChange(userId) {
      dispatch(fetchProfilePosts(userId));
    },

    handleTopicChange(topicId, topicName) {
      dispatch(fetchPosts(topicId));
      dispatch(selectTopic(topicId));
    },

    handleRefresh(whatToRefresh, id, userId) {
      if (whatToRefresh === LATEST_BRANCH) dispatch(fetchLatestPosts());
      else if (whatToRefresh === TRENDING_BRANCH) 0//to implement
      else if (whatToRefresh === SELECTEDTOPIC_BRANCH) dispatch(fetchPosts(id));
      else if (whatToRefresh === PROFILE_BRANCH) dispatch(fetchProfilePosts(id));

      if (userId !== 0) dispatch(fetchNotifications(userId));
    },

    handleLoadMore(whatToLoadMore, id, page) {
      if (whatToLoadMore === LATEST_BRANCH) dispatch(fetchLatestPosts(page+1));
      else if (whatToLoadMore === TRENDING_BRANCH) 0//to implement
      else if (whatToLoadMore === SELECTEDTOPIC_BRANCH) dispatch(fetchPosts(id, page+1));
      else if (whatToLoadMore === PROFILE_BRANCH) dispatch(fetchProfilePosts(id, page+1));
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
import {connect} from 'react-redux';

import PostsListP from '../components/PostsScreen/PostsListP';

import {fetchPosts} from '../actions/requestPosts';
import {fetchLatestPosts} from '../actions/requestLatestPosts';
import {selectTopic} from '../actions/selectTopic';
import {fetchProfilePosts} from '../actions/requestProfilePosts';

const mapStateToProps = (state, ownProps) =>
  ({
    posts: state.posts[ownProps.branch].items,
    postsAreFetching: state.posts[ownProps.branch].areFetching,

    topics: state.topics.items,
    topicsAreFetching: state.topics.areFetching,
    selectedTopic: state.topics.selectedTopic, //used only for handleRefresh

    selectedProfile: state.posts.profile.items ? state.posts.profile.items[0].userId : null,
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
      if (whatToRefresh === 'latest') dispatch(fetchLatestPosts());
      else if (whatToRefresh === 'trending') 0//to implement
      else if (whatToRefresh === 'profile') dispatch(fetchProfilePosts(id));
      else if (whatToRefresh === 'selectedTopic') dispatch(fetchPosts(id));
    },
  });

const PostsList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostsListP);

export default PostsList;
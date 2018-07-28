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

    handleRefresh(selectedTopic) {
      if (selectedTopic === 'latest') dispatch(fetchLatestPosts());
      else if (selectedTopic === 'trending') 0//to implement
      else dispatch(fetchPosts(selectedTopic));
    },
  });

const PostsList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostsListP);

export default PostsList;
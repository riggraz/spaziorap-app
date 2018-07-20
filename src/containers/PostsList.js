import {connect} from 'react-redux';

import PostsListP from '../components/PostsScreen/PostsListP';

import {fetchPosts} from '../actions/requestPosts';
import {selectTopic} from '../actions/selectTopic';

const mapStateToProps = state =>
  ({
    posts: state.posts.items,
    postsAreFetching: state.posts.areFetching,

    topics: state.topics.items,
    topicsAreFetching: state.topics.areFetching,
    selectedTopic: state.topics.selectedTopic, //used only for handleRefresh
  });

const mapDispatchToProps = dispatch =>
  ({
    handleTopicChange(topicId) {
      dispatch(fetchPosts(topicId));
      dispatch(selectTopic(topicId));
    },

    handleRefresh(selectedTopic) {
      dispatch(fetchPosts(selectedTopic));
    },
  });

const PostsList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostsListP);

export default PostsList;
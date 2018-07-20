import {connect} from 'react-redux';

import PostsListP from '../components/PostsScreen/PostsListP';

import {fetchPosts} from '../actions/requestPosts';
import {selectTopic} from '../actions/selectTopic';

import {POSTS_BY_TOPIC} from '../constants/navigation';

const mapStateToProps = (state, ownProps) =>
  ({
    posts: state.posts[ownProps.of].items,
    postsAreFetching: state.posts[ownProps.of].areFetching,

    topics: state.topics.items,
    topicsAreFetching: state.topics.areFetching,
    selectedTopic: state.topics.selectedTopic, //used only for handleRefresh
  });

const mapDispatchToProps = dispatch =>
  ({
    handleTopicChange(topicId, topicName) {
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
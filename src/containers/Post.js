import {connect} from 'react-redux';

import PostP from '../components/SinglePostScreen/PostP';

import {fetchPosts} from '../actions/requestPosts';
import {selectTopic} from '../actions/selectTopic';
import {fetchProfilePosts} from '../actions/requestProfilePosts';

const mapStateToProps = (state, ownProps) =>
  ({
    post: state.posts[ownProps.branch].items.find(post => post.id === ownProps.id),
    topics: state.topics.items,
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
  });

const Post = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostP);

export default Post;
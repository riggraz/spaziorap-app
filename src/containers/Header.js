import {connect} from 'react-redux';

import HeaderP from '../components/PostsScreen/Header/HeaderP';

import {fetchPosts} from '../actions/requestPosts';
import {selectTopic} from '../actions/selectTopic';

const mapStateToProps = state =>
  ({
    //TopicPicker
    topics: state.topics.items,
    selectedTopic: state.topics.selectedTopic,

    //LoadingInfo
    isLoading: state.posts.areFetching,

    //UserInfo
    username: state.user.username,
  });

const mapDispatchToProps = dispatch =>
  ({
    //TopicPicker
    handleTopicChange(topic) {
      dispatch(fetchPosts(topic));
      dispatch(selectTopic(topic));
    }
  });

const Header = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderP);

export default Header;
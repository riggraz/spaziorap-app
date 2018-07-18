import {connect} from 'react-redux';

import HeaderLeftP from '../components/PostsScreen/HeaderLeft';

import {fetchPosts} from '../actions/requestPosts';
import {selectTopic} from '../actions/selectTopic';

const mapStateToProps = state =>
  ({
    //TopicInfo
    topics: state.topics.items,
    selectedTopic: state.topics.selectedTopic,

    //LoadingInfo
    isLoading: state.posts.areFetching,
  });

const mapDispatchToProps = dispatch =>
  ({
    //TopicPicker
    handleTopicChange(topic) {
      dispatch(fetchPosts(topic));
      dispatch(selectTopic(topic));
    }
  });

const HeaderLeft = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderLeftP);

export default HeaderLeft;
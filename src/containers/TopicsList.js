import {connect} from 'react-redux';

import TopicsListP from '../components/TopicsScreen/TopicsListP';

import {fetchPosts} from '../actions/requestPosts';
import {selectTopic} from '../actions/selectTopic';

const mapStateToProps = state =>
  ({
    topics: state.topics.items,
    selectedTopic: state.topics.selectedTopic,
  });

const mapDispatchToProps = dispatch =>
  ({
    handleTopicChange(topic) {
      dispatch(fetchPosts(topic));
      dispatch(selectTopic(topic));
    },
  });

const TopicsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicsListP);

export default TopicsList;
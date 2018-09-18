import {connect} from 'react-redux';

import TopicsListHorizontalP from '../components/TopicsListHorizontal';

import {fetchPosts} from '../actions/requestPosts';
import {selectTopic} from '../actions/selectTopic';

const mapStateToProps = state =>
  ({
    topics: state.topics.items,
  });

const mapDispatchToProps = dispatch =>
  ({
    handleTopicChange(topic) {
      dispatch(fetchPosts(topic));
      dispatch(selectTopic(topic));
    },
  });

const TopicsListHorizontal = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicsListHorizontalP);

export default TopicsListHorizontal;
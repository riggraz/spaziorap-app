import {connect} from 'react-redux';

import TopicPickerPresentational from '../components/PostsScreen/TopicPickerPresentational';
import {selectTopic} from '../actions/selectTopic';
import {fetchPosts} from '../actions/requestPosts';

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
    }
  })

const TopicPicker = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicPickerPresentational);

export default TopicPicker;
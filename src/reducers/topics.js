import {SELECT_TOPIC} from '../actions/selectTopic';
import {
  START_TOPICS_REQUEST,
  TOPICS_REQUEST_SUCCESSFUL,
} from '../actions/requestTopics';

const topics = (
  state = {
    selectedTopic: 'recent',
    areFetching: false,
    items: [],
  },
  action
) => {
  switch (action.type) {
    case SELECT_TOPIC:
      return {
        ...state,
        selectedTopic: action.topic,
      };

    case START_TOPICS_REQUEST:
      return {
        ...state,
        areFetching: true,
      };

    case TOPICS_REQUEST_SUCCESSFUL:
      return {
        selectedTopic: state.selectedTopic,
        areFetching: false,
        items: action.topics.map(topic => ({
          id: topic.id,
          name: topic.attributes.name
        }),
        )
      };

    default:
      return state;
  }
}

export default topics;